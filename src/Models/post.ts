import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

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
    likes: [
        {
            type: ObjectId,
            ref: "User"
        }
    ]
    ,
    postedBy: {
        type: ObjectId,
        ref: "User"
    }
})
export default mongoose.model("Post", postSchema)