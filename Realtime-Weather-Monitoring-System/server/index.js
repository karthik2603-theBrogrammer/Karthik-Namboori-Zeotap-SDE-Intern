// server.js
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cron = require("node-cron");
const cors = require("cors");
const nodemailer = require('nodemailer');
const figlet = require('figlet');


const connectDB = require("./config/db");
const Weather = require("./models/Weather.js");
const DailySummary = require("./models/DailySummary.js");
const AlertModel = require("./models/Alert.js");

const sendAlertEmail = require("./utils/sendMessage");
const apiRoutes = require("./routes/api");

const app = express();
app.use(cors());
app.use("/api", apiRoutes);
app.use(express.json());

// Connect to MongoDB
connectDB();

// SSE clients
let clients = [];

// Send events to all clients
const sendEventsToAll = (data, type = "weather") => {
  clients.forEach((client) => {
    client.res.write(`event: ${type}\n`);
    client.res.write(`data: ${JSON.stringify(data)}\n\n`);
  });
};

// SSE endpoint
app.get("/events", (req, res) => {
  // Set headers for SSE
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  // Add client to the list
  const clientId = Date.now();
  const newClient = {
    id: clientId,
    res,
  };
  clients.push(newClient);
  console.log(`Client ${clientId} connected`);

  req.on("close", () => {
    console.log(`Client ${clientId} disconnected`);
    clients = clients.filter((client) => client.id !== clientId);
  });
});

// Cities with thresholds in Kelvin
const cities = [
  { name: "Delhi", lat: 28.7041, lon: 77.1025, temp_threshold: 300.15 },
  { name: "Mumbai", lat: 19.076, lon: 72.8777, temp_threshold: 308.15 },
  { name: "Chennai", lat: 13.0827, lon: 80.2707, temp_threshold: 308.15 },
  { name: "Bangalore", lat: 12.9716, lon: 77.5946, temp_threshold: 308.15 },
  { name: "Kolkata", lat: 22.5726, lon: 88.3639, temp_threshold: 308.15 },
  { name: "Hyderabad", lat: 17.385, lon: 78.4867, temp_threshold: 308.15 },
];

// Initialize consecutive breach counts
const consecutiveBreaches = {};
cities.forEach((city) => {
  consecutiveBreaches[city.name] = 0;
});

// Function to fetch weather data with retry logic
const fetchWeatherData = async (city) => {
  const apiKeys = [
    process.env.OPENWEATHERMAP_API_KEY,
    process.env.OPENWEATHERMAP_API_KEY_2,
  ];

  for (let i = 0; i < apiKeys.length; i++) {
    const apiKey = apiKeys[i];
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            lat: city.lat,
            lon: city.lon,
            appid: apiKey,
          },
        }
      );
      console.log("API KEY: ", i + 1, "Worked")
      return response.data;
    } catch (error) {
      console.error(`Error fetching data for ${city.name} with API key ${i + 1}:`, error.message);
      if (i === apiKeys.length - 1) {
        // If this was the last API key, rethrow the error
        throw error;
      }
    }
  }
};

// Cron job to fetch data every FETCH_INTERVAL minutes
cron.schedule(`*/${process.env.FETCH_INTERVAL} * * * *`, async () => {
  console.log("Fetching weather data...");
  for (const city of cities) {
    try {
      const data = await fetchWeatherData(city);

      const weatherData = {
        city: city.name,
        main: data.weather[0].main,
        description: data.weather[0].description,
        temp: data.main.temp, // Temperature in Kelvin
        feels_like: data.main.feels_like, // Feels like temperature in Kelvin
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind_speed: data.wind.speed,
        dt: new Date(data.dt * 1000),
      };

      // Save to database
      const weather = new Weather(weatherData);
      await weather.save();

      // Send to clients via SSE
      sendEventsToAll(weatherData);

      // Check and handle alerts
      await handleAlerts(weatherData);
    } catch (error) {
      console.error(`Failed to fetch weather data for ${city.name}:`, error.message);
    }
  }
});

// Function to handle alerts
const handleAlerts = async (weatherData) => {
  const cityName = weatherData.city;
  const cityConfig = cities.find((city) => city.name === cityName);
  const threshold = cityConfig.temp_threshold;

  // Ensure the consecutiveBreaches object has an entry for this city
  if (consecutiveBreaches[cityName] === undefined) {
    consecutiveBreaches[cityName] = 0;
  }

  // Check if the temperature exceeds the threshold
  if (weatherData.temp > threshold) {
    consecutiveBreaches[cityName] += 1;

    console.log(
      `Temperature for ${cityName} exceeded threshold (${threshold} K). Consecutive breaches: ${consecutiveBreaches[cityName]}`
    );

    // If this is the second consecutive breach, trigger the alert
    if (consecutiveBreaches[cityName] >= 2) {
      // Create a new alert
      const alertData = {
        city: cityName,
        condition: `Temperature exceeded ${threshold} K for 2 consecutive times`,
        threshold: threshold,
        triggeredAt: new Date(),
        active: true,
      };

      // Save the alert to the database
      const newAlert = new AlertModel(alertData);
      await newAlert.save();

      // Send SSE to clients
      sendEventsToAll(alertData, "alert");

      // Send email via Nodemailer
      sendAlertEmail(alertData);

      // Reset the consecutive breach count to prevent repeated alerts
      consecutiveBreaches[cityName] = 0;
    }
  } else {
    // Reset the consecutive breach count if temperature is below threshold
    consecutiveBreaches[cityName] = 0;
  }
};

// Function to calculate daily summaries
const calculateDailySummaries = async () => {
  console.log("Calculating daily summaries...");
  const today = new Date();
  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  for (const city of cities) {
    const records = await Weather.find({
      city: city.name,
      dt: { $gte: startOfDay },
    });

    if (records.length === 0) continue;

    const temps = records.map((r) => r.temp);
    const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length;
    const maxTemp = Math.max(...temps);
    const minTemp = Math.min(...temps);

    const humidityArr = records.map((r) => r.humidity);
    const avgHumidity =
      humidityArr.reduce((a, b) => a + b, 0) / humidityArr.length;

    const pressureArr = records.map((r) => r.pressure);
    const avgPressure =
      pressureArr.reduce((a, b) => a + b, 0) / pressureArr.length;

    const windSpeedArr = records.map((r) => r.wind_speed);
    const avgWindSpeed =
      windSpeedArr.reduce((a, b) => a + b, 0) / windSpeedArr.length;

    // Determine dominant weather condition
    const conditionFrequency = {};
    records.forEach((r) => {
      conditionFrequency[r.main] = (conditionFrequency[r.main] || 0) + 1;
    });
    const dominantCondition = Object.keys(conditionFrequency).reduce((a, b) =>
      conditionFrequency[a] > conditionFrequency[b] ? a : b
    );

    // Save to DailySummary
    const summary = new DailySummary({
      city: city.name,
      date: startOfDay,
      avg_temp: avgTemp.toFixed(2), // Temperatures in Kelvin
      max_temp: maxTemp,
      min_temp: minTemp,
      avg_humidity: avgHumidity.toFixed(2),
      avg_pressure: avgPressure.toFixed(2),
      avg_wind_speed: avgWindSpeed.toFixed(2),
      dominant_condition: dominantCondition,
    });

    await summary.save();
    sendEventsToAll(summary, 'daily-summary');
  }
};

// Schedule daily summary calculation
cron.schedule(`0 */${process.env.DAILY_SUMMARY_INTERVAL} * * *`, calculateDailySummaries);

// Start the server
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  figlet('monitx', { horizontalLayout: 'default', verticalLayout: 'default' }, (err, data) => {
    if (err) {
      console.error('Error generating ASCII art:', err);
      return;
    }
    console.log(data);
  });
});
