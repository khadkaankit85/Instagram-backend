import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { configDotenv } from 'dotenv';

const router = express.Router();
const User = mongoose.model('User');


router.get("/getProfile", (req, res) => {
    res.json({
        message: "message received"
    })
})

// router.get("/likepost",(req,res)=>{

// })

// router.post("/getPosts", require("../Signup"))

module.exports = router 