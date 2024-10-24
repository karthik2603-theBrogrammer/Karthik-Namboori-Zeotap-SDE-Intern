// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import Chart from 'react-apexcharts';
import {
  Container,
  Typography,
  Select,
  MenuItem,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  ThemeProvider,
  createTheme,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';

import './App.css';

function App() {
  const [city, setCity] = useState('Bangalore');
  const [temperatureUnit, setTemperatureUnit] = useState('K'); // 'K' or 'C'
  const [dailySummaries, setDailySummaries] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [latestWeather, setLatestWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [alertsPage, setAlertsPage] = useState(1);
  const [summariesPage, setSummariesPage] = useState(1);
  const itemsPerPage = 5;

  // Store all weather data regardless of city
  const [allWeatherData, setAllWeatherData] = useState([]);
  const [allSummaries, setAllSummaries] = useState([]);
  const [allAlerts, setAllAlerts] = useState([]);

  const fetchSummaries = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/api/summaries`);
      setAllSummaries(response.data);
    } catch (error) {
      toast.error(`Error fetching summaries: ${error.message}`);
    }
  };

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/api/weather`);
      setAllWeatherData(response.data);
    } catch (error) {
      toast.error(`Error fetching weather data: ${error.message}`);
    }
  };

  const fetchAlerts = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/api/alerts`);
      setAllAlerts(response.data);
    } catch (error) {
      toast.error(`Error fetching alerts: ${error.message}`);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchSummaries();
    fetchAlerts();
    fetchWeatherData();
    setLatestWeather(null); // Reset latest weather
    toast.success("MonitX is a go!")

    const events = new EventSource('http://localhost:5555/events');

    events.addEventListener('weather', (event) => {
      const weather = JSON.parse(event.data);
      setAllWeatherData((prev) => [...prev, weather]);
      // Update latest weather if it matches the selected city
      if (weather.city === city) {
        setLatestWeather(weather);
        setWeatherData((prev) => [...prev, weather]);
        toast.info(`Received realtime data for ${weather?.city} `)
      }
    });

    events.addEventListener('daily-summary', (event) => {
      const summary = JSON.parse(event.data);
      setAllSummaries((prev) => [...prev, summary]);
      if (summary.city === city) {
        setDailySummaries((prev) => [summary, ...prev]);
        toast.success('New daily summary received!');
      }
      toast.info(`Received realtime data for ${weather?.city}: Summary `)
    });

    events.addEventListener('alert', (event) => {
      const alert = JSON.parse(event.data);
      setAllAlerts((prev) => [...prev, alert]);
      if (alert.city === city) {
        setAlerts((prev) => [alert, ...prev]);
        toast.error(`New weather alert triggered for ${weather?.city}!`);
      }
      toast.warning(`Received ALERT in ${weather?.city}! `)
    });

    setLoading(false);

    return () => events.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update data when city or data changes
  useEffect(() => {
    // Filter weather data for the selected city
    const cityWeatherData = allWeatherData.filter((data) => data.city === city);
    setWeatherData(cityWeatherData);

    // Filter and sort summaries for the selected city
    const citySummaries = allSummaries
      .filter((summary) => summary.city === city)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    setDailySummaries(citySummaries);

    // Filter and sort alerts for the selected city
    const cityAlerts = allAlerts
      .filter((alert) => alert.city === city)
      .sort((a, b) => new Date(b.triggeredAt) - new Date(a.triggeredAt));
    setAlerts(cityAlerts);

    // Update latest weather for the selected city
    const latestCityWeather = cityWeatherData[cityWeatherData.length - 1] || null;
    setLatestWeather(latestCityWeather);

    // Reset pagination when city changes
    setAlertsPage(1);
    setSummariesPage(1);
  }, [city, allWeatherData, allSummaries, allAlerts]);

  // Prepare data for the chart with x-axis labels including date and time
  const chartData = React.useMemo(() => {
    if (weatherData.length === 0) return { series: [], categories: [] };

    // Group data into 20-minute intervals
    const interval = 20; // minutes
    const groupedData = {};

    weatherData.forEach((data) => {
      const date = new Date(data.dt);
      const minutes = Math.floor(date.getMinutes() / interval) * interval;
      const intervalTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        minutes,
        0,
        0
      );

      const key = intervalTime.getTime();

      if (!groupedData[key]) {
        groupedData[key] = { temp: [], pressure: [], humidity: [] };
      }

      groupedData[key].temp.push(data.temp);
      groupedData[key].pressure.push(data.pressure);
      groupedData[key].humidity.push(data.humidity);
    });

    const categories = [];
    const tempData = [];
    const pressureData = [];
    const humidityData = [];

    Object.keys(groupedData)
      .sort((a, b) => a - b)
      .forEach((key) => {
        const date = new Date(parseInt(key));
        // Include date and time in the x-axis labels
        categories.push(
          date.toLocaleString([], {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        );
        const group = groupedData[key];
        tempData.push(average(group.temp));
        pressureData.push(average(group.pressure));
        humidityData.push(average(group.humidity));
      });

    // Adjust temperatures based on selected unit
    const adjustedTempData = tempData.map((temp) =>
      temperatureUnit === 'K' ? temp : temp - 273.15
    );

    // Prepare the series based on the temperature unit
    let series = [
      {
        name: `Temperature (${temperatureUnit === 'K' ? 'K' : '°C'})`,
        data: adjustedTempData,
      },
    ];

    // Include pressure and humidity only if temperature unit is Kelvin
    if (temperatureUnit === 'K') {
      series = [
        ...series,
        { name: 'Pressure (hPa)', data: pressureData },
        { name: 'Humidity (%)', data: humidityData },
      ];
    }

    return {
      series,
      categories,
    };
  }, [weatherData, temperatureUnit]);

  // Helper function to calculate average
  function average(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }

  // Helper function to format temperature
  function formatTemperature(kelvinTemp) {
    if (temperatureUnit === 'K') {
      return `${kelvinTemp.toFixed(2)} K`;
    } else {
      const celsiusTemp = kelvinTemp - 273.15;
      return `${celsiusTemp.toFixed(2)} °C`;
    }
  }

  const chartOptions = {
    chart: {
      type: 'area',
      height: 280,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: chartData.series,
    xaxis: {
      categories: chartData.categories,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
  };

  const theme = createTheme({
    palette: {
      primary: { main: '#1976d2' },
      secondary: { main: '#dc004e' },
    },
  });

  // Pagination for summaries
  const totalSummariesPages = Math.ceil(dailySummaries.length / itemsPerPage);
  const displayedSummaries = dailySummaries.slice(
    (summariesPage - 1) * itemsPerPage,
    summariesPage * itemsPerPage
  );

  // Pagination for alerts
  const totalAlertsPages = Math.ceil(alerts.length / itemsPerPage);
  const displayedAlerts = alerts.slice(
    (alertsPage - 1) * itemsPerPage,
    alertsPage * itemsPerPage
  );

  // Get current time once for highlighting
  const now = new Date();
  const tenMinutesAgo = new Date(now.getTime() - 10 * 60 * 1000);

  // Helper function to format date as "24 Oct 1:09 pm"
  function formatDate(date) {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.toLocaleString('default', { month: 'short' });
    let hours = d.getHours();
    let minutes = d.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Convert to 12-hour format
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if needed
    return `${day} ${month} ${hours}:${minutes} ${ampm}`;
  }

  return (
    <div className="flex flex-col bg-[url('/hero-vector.png')]">
      <div className='w-full flex items-center justify-center '>
      <img
          src="monitx.png"
          alt="engo-url"
          className={`relative z-100 md:h-[250px] h-[150px] md:w-[600px] w-[380px] bg-transparent object-contain`}
        />
      </div>
      <ThemeProvider theme={theme}>
        <Container style={{ marginTop: '20px' }}>


          {loading ? (
            <CircularProgress />
          ) : (
            <>
              {/* Dashboard */}
              {latestWeather && (
                <div className='flex flex-col gap-5 items-center justify-center p-5'>
                  <div className="flex flex-row items-center justify-center">
                    <h2 className='font-bold text-[40px] text-center w-full'>
                      Current Weather in <span className='text-blue-500'>{city}</span>
                    </h2>

                    <p className="p-1 text-xs text-white bg-green-500 m-2 rounded-lg">Live</p>

                  </div>
                  <div className='relative grid grid-cols-2 md:grid-cols-3 place-content-center border rounded-md p-2 gap-5'>

                    <div className='flex flex-row gap-2 items-end'>
                      <p className='text-[25px] font-semibold'>Temperature:</p>
                      <p className='text-[35px] text-white bg-blue-400 p-2 rounded-lg'>{formatTemperature(latestWeather.temp)}</p>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>
                      <p className='text-[25px] font-semibold'>Humidity:</p>
                      <p className='text-[35px] text-white bg-blue-400 p-2 rounded-lg'>{latestWeather.humidity}%</p>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>
                      <p className='text-[25px] font-semibold'>Pressure:</p>
                      <p className='text-[35px] text-white bg-blue-400 p-2 rounded-lg'>{latestWeather.pressure} hPa</p>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>
                      <p className='text-[25px] font-semibold'>Wind Speed:</p>
                      <p className='text-[35px] text-white bg-blue-400 p-2 rounded-lg'>{latestWeather.wind_speed} m/s</p>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>
                      <p className='text-[25px] font-semibold'>Condition:</p>
                      <p className='text-[35px] text-white bg-blue-400 p-2 rounded-lg'>{latestWeather.main}</p>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>
                      <p className='text-[25px] font-semibold'>Last Updated:</p>
                      <p className='text-[20px] text-white bg-blue-400 p-2 rounded-lg'>{formatDate(latestWeather.dt)}</p>
                    </div>
                  </div>
                </div>

              )}

              <Grid container spacing={3}>
                {/* Settings */}
                <Grid item xs={12} md={4}>
                  <Card style={{ marginBottom: '20px' }}>
                    <CardContent>
                      <p >
                        Settings
                      </p>
                      <FormControl fullWidth margin="normal">
                        <InputLabel>City</InputLabel>
                        <Select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          label="City"
                        >
                          <MenuItem value="Bangalore">Bangalore</MenuItem>
                          <MenuItem value="Delhi">Delhi</MenuItem>
                          <MenuItem value="Mumbai">Mumbai</MenuItem>
                          <MenuItem value="Chennai">Chennai</MenuItem>
                          <MenuItem value="Kolkata">Kolkata</MenuItem>
                          <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth margin="normal">
                        <InputLabel>Temperature Unit</InputLabel>
                        <Select
                          value={temperatureUnit}
                          onChange={(e) => setTemperatureUnit(e.target.value)}
                          label="Temperature Unit"
                        >
                          <MenuItem value="K">Kelvin</MenuItem>
                          <MenuItem value="C">Celsius</MenuItem>
                        </Select>
                      </FormControl>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Chart */}
                <Grid item xs={12} md={8}>
                  <Card style={{ marginBottom: '20px' }}>
                    <CardContent>
                      <p>
                        Historical Weather Trends
                      </p>
                      {chartData.series.length > 0 ? (
                        <Chart
                          options={chartOptions}
                          series={chartOptions.series}
                          type="area"
                          height={280}
                        />
                      ) : (
                        <p>No data available for the selected city.</p>
                      )}
                    </CardContent>
                  </Card>
                </Grid>

                {/* Summaries */}
                <Grid item xs={12} md={6}>
                  <Card style={{ marginBottom: '20px' }}>
                    <CardContent>
                      <p className='text-[30px]'>
                        Daily Summaries
                      </p>
                      {displayedSummaries.length > 0 ? (
                        displayedSummaries.map((summary) => {
                          const summaryDate = new Date(summary.date);
                          const isRecent = summaryDate >= tenMinutesAgo;

                          return (
                            <div
                              key={summary._id}
                              style={{
                                marginBottom: '10px',
                                backgroundColor: isRecent ? 'orange' : 'inherit',
                              }}
                            >
                              <div className='flex flex-col items-start justify-start p-4 border rounded'>
                                <p className='font-semibold text-lg mb-2'>
                                  {summary.city} - {summaryDate.toDateString()}
                                </p>
                                <p className='text-sm'>
                                  <span className='font-medium'>Average Temperature:</span> {formatTemperature(summary.avg_temp)}
                                </p>
                                <p className='text-sm'>
                                  <span className='font-medium'>Maximum Temperature:</span> {formatTemperature(summary.max_temp)}
                                </p>
                                <p className='text-sm'>
                                  <span className='font-medium'>Minimum Temperature:</span> {formatTemperature(summary.min_temp)}
                                </p>
                                <p className='text-sm'>
                                  <span className='font-medium'>Average Humidity:</span> {summary.avg_humidity}%
                                </p>
                                <p className='text-sm'>
                                  <span className='font-medium'>Average Pressure:</span> {summary.avg_pressure} hPa
                                </p>
                                <p className='text-sm'>
                                  <span className='font-medium'>Average Wind Speed:</span> {summary.avg_wind_speed} m/s
                                </p>
                                <p className='text-sm'>
                                  <span className='font-medium'>Dominant Condition:</span> {summary.dominant_condition}
                                </p>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <p>No summaries available.</p>
                      )}
                      {/* Pagination Controls */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '10px',
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={summariesPage === 1}
                          onClick={() => setSummariesPage(summariesPage - 1)}
                        >
                          Previous
                        </Button>
                        <p>
                          Page {summariesPage} of {totalSummariesPages || 1}
                        </p>
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={
                            summariesPage === totalSummariesPages || totalSummariesPages === 0
                          }
                          onClick={() => setSummariesPage(summariesPage + 1)}
                        >
                          Next
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Alerts */}
                <Grid item xs={12} md={6}>
                  <Card style={{ marginBottom: '20px' }}>
                    <CardContent>
                      <p className='text-[30px]'>
                        Weather Alerts
                      </p>
                      {displayedAlerts.length > 0 ? (
                        displayedAlerts.map((alert) => {
                          const alertDate = new Date(alert.triggeredAt);
                          const isRecent = alertDate >= tenMinutesAgo;

                          return (
                            <Card
                              key={alert._id}
                              style={{
                                marginBottom: '10px',
                                backgroundColor: isRecent ? 'orange' : 'inherit',
                              }}
                            >
                              <CardContent>
                                <p className='text-sm'>
                                  <span className='font-medium'>{alert.city} - {alert.condition}</span>
                                </p>
                                <p className='text-sm'>
                                  <span className='font-medium'>Triggered At: {alertDate.toLocaleString()}</span>
                                </p>
                              </CardContent>
                            </Card>
                          );
                        })
                      ) : (
                        <Typography>No alerts for the selected city.</Typography>
                      )}
                      {/* Pagination Controls */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '10px',
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={alertsPage === 1}
                          onClick={() => setAlertsPage(alertsPage - 1)}
                        >
                          Previous
                        </Button>
                        <p>
                          Page {alertsPage} of {totalAlertsPages || 1}
                        </p>
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={alertsPage === totalAlertsPages || totalAlertsPages === 0}
                          onClick={() => setAlertsPage(alertsPage + 1)}
                        >
                          Next
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </>
          )}

          <Toaster richColors position="bottom-right" expand={true} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
