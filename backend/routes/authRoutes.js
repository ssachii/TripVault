// backend/routes/authRoutes.js

const express = require("express");
const { register, login } = require("../controllers/authController"); // Import the functions

const router = express.Router();

router.post("/register", register); // Ensure "register" function is defined and imported correctly
router.post("/login", login); // Ensure "login" function is defined and imported correctly

module.exports = router;
