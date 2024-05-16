const app = require('express')
const router = app.Router()


router.post("login/", (req, res) => {

    console.log(req.body)
    res.sendStatus(200)
})

router.post("/signup", (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})
router.get("/signup", (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})


module.exports = router