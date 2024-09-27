const app = require("express")
const router = app.Router()
const checklogin = require("../../Middlewares/CheckLogin")
const mongoose = require("mongoose")
const Post = mongoose.model("Post")
const User = mongoose.model("User")

// router.get("/like", checklogin, (req, res) => {
//     console.log(req.user)
//     return res.json({
//         note: 'Liked the video alright'
//     })
// })

router.get("/getallposts", (req, res) => {
    Post.find()
        .populate("postedBy", "_id name")
        .then((allposts) => {
            res.json({
                post: allposts
            })
        })
})


router.get("/myposts", async (req, res) => {
    let username = req.query.username
    console.log(username)

    let userid = await User.findOne({ username: username })
    // ---------------------------------------------------------------------------------
    // let username = req.body.username
    // if (!username) return res.status(400).json({
    //     error: "where is username buddy"
    // })
    // this works but whyy do i find all the posts lol, there should be a better way
    // Post.find().populate("postedBy", "_id name username")
    //     .then((posts) => {
    //         let myPosts = posts.filter((posts) => { return posts.postedBy.username === username })
    //         return res.json({
    //             myPosts
    //         })
    //     })
    // ------------------------------------------------------------------------------------------
    console.log(userid)
    Post.find({
        postedBy: userid
    })
        .populate("postedBy", "_id name username")
        .then((allposts) => {
            res.json({
                post: allposts
            })
        })


})

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
// request to like a post
router.put("/like", checklogin, (req, res) => {
    let postId = req.body.postId

    Post.findByIdAndUpdate(postId, {
        $push: { likes: req.user._id }
    },
        {
            new: true
        },
    ).exec((err, result) => {
        if (err) {
            return res.json({ error: err })
        }
        else {
            res.json({ result })
        }
    })

})
// request to like a post
router.put("/unlike", checklogin, (req, res) => {
    let postId = req.body.postId

    Post.findByIdAndUpdate(postId, {
        $pop: { likes: req.user._id }
    },
        {
            new: true
        },
    ).exec((err, result) => {
        if (err) {
            return res.json({ error: err })
        }
        else {
            res.json({ result })
        }
    })

})

module.exports = router