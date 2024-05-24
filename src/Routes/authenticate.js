const app = require('express')
const router = app.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const { configDotenv } = require('dotenv')


router.post("login/", (req, res) => {

    console.log(req.body)
    res.sendStatus(200)
})

router.post("/signup", require("../Signup"))

module.exports = router 