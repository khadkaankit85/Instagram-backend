const app = require('express')
const router = app.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const { configDotenv } = require('dotenv')


router.get("/getProfile", (req, res) => {
    res.json({
        message: "message received"
    })
})

// router.get("/likepost",(req,res)=>{

// })

// router.post("/getPosts", require("../Signup"))

module.exports = router 