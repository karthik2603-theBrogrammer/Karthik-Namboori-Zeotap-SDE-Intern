# MonitX: A Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates

> [!TIP]  
> 🌳 Click [here](https://github.com/karthik2603-theBrogrammer/Karthik-Namboori-Zeotap-SDE-Intern) for viewing the Rule Engine Assignment.


<div align="center">
  <img width="800" alt="Screenshot 2024-10-23 at 11 30 34 PM" src="https://github.com/user-attachments/assets/d54842c1-685b-4c86-b68d-01e5fdf75091">
</div>

# What is MonitX?
- MonitX is a sophisticated real-time data processing system designed for weather monitoring. It offers the following key features:
- List of features MonitX supports

| Feature ✨                                                       | Description   🚀                                                                                                                                                    |
|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Real-time weather data collection and processing              | A Cron Job runs every 10 minutes fetching data from the OpenWeather API.                                                                                          |
| Automated alert system for weather condition thresholds       | Sent to the frontend via SSE (Server Sent Events) and also via mail using Nodemailer.                                                                             |
| Daily rollups and aggregates for comprehensive weather analysis | A cron job runs every 24h executing the roll-ups leveraging the data in the MongoDB database.                                                                     |
| RESTful API for easy integration and data retrieval           | Provides endpoints for retrieving weather data, alerts, and daily summaries, facilitating seamless integration with other applications.                           |
| Email notifications for critical weather alerts               | Done with the help of the `Nodemailer` package in npm. One has to enable 2FA in the Gmail ID and obtain the App password to send emails on behalf of that account. |

# How to setup Monitx 🐳

1. Clone the Repository

```sh
git clone https://github.com/your-username/monitx.git
cd monitx
```

- We will make use of Docker to setup monitx.
- After cloning the respository, proceed to `.env-prod` and fill up the missing required environment variables before running the compose file.
- [IMPORTANT] APP_PASSWORD: for sending mails via nodemailer SMTP.


2. Spin up Compose file `(docker-compose-prod.yaml)`

```sh
docker-compose -f docker-compose-prod.yaml up
```

3. Thats It 🎉


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


## Revised API Documentation

### Alert Endpoints

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| GET    | `/api/alerts`      | Retrieve all alerts       |
| POST   | `/api/alerts`      | Create a new alert        |
| PUT    | `/api/alerts/:id`  | Deactivate an alert       |

### API Endpoints

| Method | Endpoint          | Description                                  |
|--------|-------------------|----------------------------------------------|
| GET    | `/api/summaries`  | Get daily summaries filtered by city         |

### Weather Endpoints

| Method | Endpoint        | Description                          |
|--------|-----------------|--------------------------------------|
| GET    | `/api/weather`  | Get weather data filtered by city    |

---



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

# UI Screenshot

<div aligh = "center">
  <img width="1460" alt="Screenshot 2024-10-24 at 2 52 44 PM" src="https://github.com/user-attachments/assets/9d7a9940-f1d4-47fe-bbb1-e70ef8186712">
</div>

# Email Screenshot

<div aligh = "center">
  <img width="1053" alt="Screenshot 2024-10-24 at 5 04 01 PM" src="https://github.com/user-attachments/assets/30a15fa8-b053-42ab-9ede-0681d0a0f215">
</div>


