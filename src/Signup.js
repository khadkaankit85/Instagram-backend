const app = require('express')
const router = app.Router()
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

const User = mongoose.model("User")


router.post("/", (req, res) => {
    const { username, email, password, name } = req.body
    if (!email || !password || !username || !name) {
        return res.status(422).json({
            //422- got the request but, invalid
            error: "Please fill all the fields"
        })
    }
    else {
        User.findOne({ username: username })
            .then((saveduser) => {
                if (saveduser) {
                    return res.status(422).json({ error: "user already exists with that username" })
                }
                else {

                    
                    //TODO: need to learn the length range  of salt
                    bcrypt.hash(password, 12)
                        .then((hashedPassword) => {
                            const user = new User({
                                name,
                                username,
                                email,
                                password: hashedPassword

                            })
                            user.save()
                                .then((user) => {
                                    res.json({
                                        message: "created new user"
                                    })
                                })
                                .catch((e) => {
                                    console.log("error happening ", e)
                                })

                        })


                }
            })
            .catch((e) => {
                console.log("unexpected error", e)
            })
    }
})
module.exports = router
