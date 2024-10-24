const express = require('express');
const router = express.Router();
const Alert = require('../models/Alert');
const Weather = require('../models/Weather');
const DailySummary = require('../models/DailySummary');

// Create a new alert
router.post('/alerts', async (req, res) => {
  const { city, condition, threshold } = req.body;
  try {
    const newAlert = new Alert({ city, condition, threshold, active: true });
    await newAlert.save();
    res.json(newAlert);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Get all alerts
router.get('/alerts', async (req, res) => {
  try {
    const alerts = await Alert.find();
    res.json(alerts);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Deactivate an alert
router.put('/alerts/:id', async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.id);
    if (!alert) return res.status(404).json({ msg: 'Alert not found' });

    alert.active = false;
    await alert.save();
    res.json(alert);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Get daily summaries filtered by city
router.get('/summaries', async (req, res) => {
  const { city } = req.query;
  try {
    const summaries = await DailySummary.find(city ? { city } : {});
    res.json(summaries);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Get weather data filtered by city
router.get('/weather', async (req, res) => {
  const { city } = req.query;
  try {
    const weatherData = await Weather.find(city ? { city } : {});
    res.json(weatherData);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
