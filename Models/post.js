const mongoose = require("mongoose")

const ObjectId = mongoose.Schema.ObjectId

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: "No photo rn"
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    }
})
mongoose.model("Post", postSchema)