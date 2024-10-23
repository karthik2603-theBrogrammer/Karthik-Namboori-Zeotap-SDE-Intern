// models/DailySummary.js
const mongoose = require('mongoose');

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

module.exports = mongoose.model('DailySummary', DailySummarySchema);
