import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import './Models/userModel';
import './Models/post';
import authenticator from "./Routes/authenticate"
import otpSender from "./Routes/otpVerification"
import userActivityHandler from "./Routes/activities"

config({ path: '.env' });

//variables
const PORT = process.env.PORT_OF_APPLICATION || 3500;

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

connectToDatabase()


//middlewares and routes
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use("/authenticate",authenticator)
app.use("/otp", otpSender)

app.use("/activities", userActivityHandler)



app.listen(PORT, () => {
    console.log(`server is live on http://localhost:${PORT}/`)
})