// config/db.jss
const mongoose = require('mongoose');

require("dotenv").config()
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB container successfully!');
  } catch (err) {
    console.log(err)
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
