# MonitX: A Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates

> [!TIP]  
> 🌳 Click [here](https://github.com/karthik2603-theBrogrammer/Karthik-Namboori-Zeotap-SDE-Intern) for viewing the Rule Engine Assignment.


<div align="center">
  <img width="800" alt="Screenshot 2024-10-23 at 11 30 34 PM" src="https://github.com/user-attachments/assets/d54842c1-685b-4c86-b68d-01e5fdf75091">
</div>

# What is MonitX?
- MonitX is a sophisticated real-time data processing system designed for weather monitoring. It offers the following key features:

1. Real-time weather data collection and processing: A Cron Job runs every 10 minutes fetching data from the OpenWeather API.
2. Automated alert system for weather condition thresholds: Sent to the frontend via SSE (Server Sent Events and also via mail using nodemailer)
3. Daily rollups and aggregates for comprehensive weather analysis: A cron job runs every 24h executing the roll ups leeveraging the the data in the MongoDB database.
5. RESTful API for easy integration and data retrieval
6. Email notifications for critical weather alerts: Done with the help of the `Nodemailer` package in npm. One has to enable 2FA in the gmail Id and obtain the App password to send mails on behalf of that account.


# Tech Stack
- MonitX is built using a modern tech stack:
1. Backend: Node.js with Express.js
2. Database: MongoDB (Leveraging Docker containers using the Mongo Image)
3. Real-time Processing: Node-cron for scheduled tasks
4. Server Sent events to send responses back to the client.
5. Email Notifications: Nodemailer
6. Frontend: React (Vite)
7. API Testing: Postman (recommended)

# Key Components

1. Weather Model

```js
   const WeatherSchema = new mongoose.Schema({
     city: String,
     main: String,
     description: String, 
     temp: Number,
     feels_like: Number,
     humidity: Number,
     pressure: Number,
     wind_speed: Number,
     dt: Date,
   });

```

2. Alert Model
   
```js
   const AlertSchema = new mongoose.Schema({
     city: String,
     condition: String,
     threshold: Number,
     triggeredAt: Date,
     active: Boolean,
   });

```

3. Daily Summary Model

```js
   const DailySummarySchema = new mongoose.Schema({
     city: String,
     date: Date,
     avg_temp: Number,
     max_temp: Number,
     min_temp: Number,
     avg_humidity: Number,
     avg_pressure: Number,
     avg_wind_speed: Number,
     dominant_condition: String,
   });
```


# API Routes

- MonitX provides a comprehensive RESTful API for interacting with the system. Key routes include:
1. ```/api/weather```: Endpoints for retrieving and managing weather data
2. ```/api/alerts```: Endpoints for setting up and managing weather alerts
3. ```/api/summaries```: Endpoints for accessing daily weather summaries

# Alert System

- MonitX features a robust alert system that monitors weather conditions and triggers notifications when predefined thresholds are met. The system uses Nodemailer to send email alerts to specified recipients.

```js
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com',
    pass: process.env.APP_PASSWORD,
  },
});

function sendAlertEmail(alertData) {
  // Email sending logic
}
```

# How to setup Monitx
1. Clone the Repository

```sh
git clone https://github.com/your-username/monitx.git
cd monitx
```

2. Spin up the Docker Container for MongoDB.

```sh
docker-compose -f docker-compose.yaml up
```

4. Install dependencies

```sh
cd server
npm install
```

4. Set up environment variables
- Create a .env file in the server directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
APP_PASSWORD=your_email_app_password
PORT=3000
```


# API Documentation

### Weather Endpoints

1. ```GET /api/weather```: Retrieve current weather data
2. ```POST /api/weather```: Add new weather data
3. ```GET /api/weather/history```: Retrieve historical weather data

### Alert Endpoints
1. ```GET /api/alerts```: Retrieve all active alerts
2. ```POST /api/alerts```: Create a new weather alert
3. ```PUT /api/alerts/:id```: Update an existing alert
4. ```DELETE /api/alerts/:id``` : Delete an alert
