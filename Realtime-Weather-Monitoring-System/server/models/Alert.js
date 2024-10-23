// models/Alert.js
const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  city: String,
  condition: String,
  threshold: Number,
  triggeredAt: Date,
  active: Boolean,
});

module.exports = mongoose.model('Alert', AlertSchema);
