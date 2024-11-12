// backend/createUniqueIndex.js
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once("open", async () => {
  try {
    await User.collection.createIndex({ username: 1 }, { unique: true });
    console.log("Unique index created for username.");
  } catch (error) {
    console.error("Error creating unique index:", error.message);
  } finally {
    mongoose.connection.close();
  }
});
