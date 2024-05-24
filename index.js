const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()
const dotenv = require("dotenv")
dotenv.config(".env")
//for database connection
const mongoose = require('mongoose')
//variables
const PORT = process.env.PORT_OF_APPLICATION || 3500

require("./Models/userModel")

function connectToDatabase() {
    // to connect to database
    mongoose.connect(process.env.MONGO_DB_URI)
    mongoose.connection.on('connected', () => {
        console.log("Connected to mongo db server")
    })
    mongoose.connection.on('error', (err) => {
        console.log("Error while connecting to the server ", err)
    })
}

//middlewares and routes
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
app.use("/authenticate", require("./src/Routes/authenticate"))
app.use("/otp", require("./src/Routes/otpVerification"))

connectToDatabase()
app.listen(PORT, () => {
    console.log(`server is live on http://localhost:${PORT}/`)
})
