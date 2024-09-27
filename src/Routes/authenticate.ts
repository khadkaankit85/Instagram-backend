const app = require('express')
const router = app.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const { configDotenv } = require('dotenv')


router.use("/login", require("../Login"))

router.use("/signup", require("../Signup"))

module.exports = router 