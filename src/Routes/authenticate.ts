import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { configDotenv } from 'dotenv';

const router = express.Router();
const User = mongoose.model("User");

router.use("/login", require("../Login"))

router.use("/signup", require("../Signup"))

module.exports = router 