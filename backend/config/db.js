// backend/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("Attempting MongoDB connection with URI:", process.env.MONGO_URI);

  try {
    await mongoose.connect(process.env.MONGO_URI); // Deprecated options removed
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
