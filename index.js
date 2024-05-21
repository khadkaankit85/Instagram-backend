const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()
const authenticate = require("./Routes/APIs/authenticate")
const otpVerification = require("./Routes/APIs/otpVerification")


//to parse the body of a http post request
app.use(bodyparser.json())
//to parse the body of a post request from encoded url
app.use(bodyparser.urlencoded({ extended: true }))

//to enable cross origin resource sharing
app.use(cors())

//for authentication
app.use("/authenticate", authenticate)

//for otp verification
app.use("/otp", otpVerification)



app.listen(3500)
