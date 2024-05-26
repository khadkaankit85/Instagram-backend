const app = require("express")
const router = app.Router()

const checklogin = require("../../Middlewares/CheckLogin")


const mongoose = require("mongoose")
const Post = mongoose.model("Post")

// router.get("/like", checklogin, (req, res) => {
//     console.log(req.user)
//     return res.json({
//         note: 'Liked the video alright'
//     })
// })

router.post("/post", checklogin, (req, res) => {
    let title = req.body.title
    let body = req.body.body
    let image = req.body.image
    if (!title || !body) return res.status(400).json({
        error: "Please provide all the details to create a post"
    })

    const post = new Post({
        title: title,
        body: body,
        postedBy: req.user
    })

    post.save()
        .then((result) => {
            res.status(200).json({
                post: result
            })
        })
        .catch((err) => {
            console.log("error while posting ")
        })


})

module.exports = router