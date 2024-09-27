//this function will take an email as an expression and will return an otp which then will be compared to the otp sent by the user
let nodemailer = require('nodemailer');
let dotenv = require("dotenv")
dotenv.config(".env")

function createOTP() {
    // Math.floor(Math.random() * (max - min + 1) + min) to create a random number between two numbers
    return Math.floor(Math.random() * (99999 - 10000 + 1) + 10000)
}

function emailVerifier(email) {
    let OTP = createOTP()

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.PASSWORD_OF_EMAIL
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: `OTP verification`,
        text: `Dear user, Your otp is ${OTP}`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


    return (OTP)

}
export = emailVerifier