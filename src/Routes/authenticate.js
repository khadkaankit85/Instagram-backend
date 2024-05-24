const app = require('express')
const router = app.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")



router.post("login/", (req, res) => {

    console.log(req.body)
    res.sendStatus(200)
})

router.post("/signup", (req, res) => {
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
                    const user = new User({
                        name,
                        username,
                        email,
                        password

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
                }
            })
            .catch((e) => {
                console.log("unexpected error", e)
            })
    }
})
router.get("/signup", (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})


module.exports = router 