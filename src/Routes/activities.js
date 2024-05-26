const app = require("express")
const router = app.Router()

const checklogin = require("../../Middlewares/CheckLogin")

router.get("/like", checklogin, (req, res) => {
    console.log(req.user)
    return res.json({
        note: 'Liked the video alright'
    })
})

module.exports = router