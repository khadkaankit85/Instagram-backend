const express = require("express")
const router = express.Router()
// email verifier tries to send otp by taking an email and returns the value of otp, is any error occurred should be handled with except and server should send server error
const emailVerifier = require("../../Middlewares/emailVerifier")
let OTP;

router.post('/getOtp', (req, res) => {
    try {
        let email = req.body.email
        console.log("request to get an otp from", email)
        OTP = emailVerifier(email)
        res.sendStatus(401)
    }
    catch (e) {
        console.log(e)
        res.sendStatus(400)
    }

    // let Otp = emailVerifier()

})

router.post('/verifyOtp', (req, res) => {
    try {
        console.log("request to verify email")
        let OTPObj = req.body
        let receivedOTP = Object.values(OTPObj).join("")
        console.log(receivedOTP)
        if (OTP == parseInt(receivedOTP)) {
            console.log("otp matched")
            //create account and return the user to login page
            res.sendStatus(200)
        }
        else {
            console.log("unmatching otp")
            res.sendStatus(404)
        }
    }
    catch (e) {
        console.log("error in otp matching section")
        console.log(e)
        res.sendStatus(400)
    }
})


//
module.exports = router