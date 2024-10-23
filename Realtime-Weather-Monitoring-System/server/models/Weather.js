// models/Weather.js
const mongoose = require('mongoose');

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

module.exports = mongoose.model('Weather', WeatherSchema);
