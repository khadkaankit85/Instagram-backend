import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { configDotenv } from 'dotenv';
import loginRouter from './Login';
import signupRouter from './Signup';

const router = express.Router();
const User = mongoose.model("User");

router.use("/login", loginRouter);
router.use("/signup", signupRouter);

export default router;