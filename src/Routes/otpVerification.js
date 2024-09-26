const express = require("express")
const router = express.Router()
// email verifier tries to send otp by taking an email and returns the value of otp, is any error occurred should be handled with except and server should send server error
const emailVerifier = require("../../Controllers/emailVerifier")
let OTP;

router.post('/getOtp', (req, res) => {
    try {
        let email = req.body.email
        console.log("request to get an otp from", email)
        OTP = emailVerifier(email)
        setTimeout(() => {
            OTP = ""
        }, 1000 * 60 * 60)
        // expires in an hour
        res.sendStatus(200)
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
            res.status(401).json({
                status: 401,
                message: "Invalid OTP"
            })
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