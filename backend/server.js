require("dotenv").config();
console.log("Loaded MongoDB URI from .env in server.js:", process.env.MONGO_URI); 
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const lockerRoutes = require("./routes/lockerRoutes");


const app = express();
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/locker", lockerRoutes);

const PORT = process.env.PORT || 5001;
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
