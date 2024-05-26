const app = require("express")
const router = app.Router()
require("dotenv").config()
const jwt = require("jsonwebtoken")

const mongoose = require("mongoose")
const User = mongoose.model("User")




const checkLogin = ((req, res, next) => {
    //need to get the jwt token from user and then compare with the one that we generated with the string we have


    let authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({
            message: "NO token found"
        })
    }
    if (!authHeader.startsWith("Bearer ")) return res.status(401).json({
        error: "auth token in wrong format"
    })

    //    now time to verify the received jwt
    let receivedJwt = authHeader.replace("Bearer ", "")

    jwt.verify(receivedJwt, process.env.JWT_AUTH_SECRET_TOKEN, (err, decodedUsername) => {
        if (err) {
            return res.status(403).json({
                error: "Invalid token"
            })
        } //forbidden

        User.findOne({
            username: decodedUsername.user
        }).then((userdata) => {
            if (!userdata) return res.status(403).json({
                error: "User doesn't exist"
            })
            req.user = userdata

            next()
        }).catch((err) => {
            res.status(403).json({
                error: "Trouble while fetching the user details from the database"
            })
        })
    })
})

module.exports = checkLogin