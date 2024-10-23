// config/db.js
const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://root:example@localhost:27017/");
    console.log('Connected to MongoDB container successfully!');
  } catch (err) {
    console.log(err)
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
