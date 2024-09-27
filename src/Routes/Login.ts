import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const User = mongoose.model("User");

router.post("/", async (req, res) => {
    const { username, email, password, name } = req.body
    if (!email || !password || !username || !name) {
        return res.status(422).json({
            //422- got the request but, invalid
            error: "Please fill all the fields"
        })
    }

    else {
        let user = await User.findOne({
            username: username,
        })

        // if username exists

        if (user) {
            let passwordMatches = bcrypt.compareSync(password, user.password)
            // if password matches
            if (passwordMatches) {

                // ----------------------------------------------------------------------------------------
                const jwtAuthToken = jwt.sign({
                    user: user.username
                }, process.env.JWT_AUTH_SECRET_TOKEN)
                // ----------------------------------------------------------------------------------------

                res.json({
                    response: "Successfully signed in",
                    token: jwtAuthToken
                })
            }

            // if password doesn't match
            else {
                return res.status(422).json({
                    error: "Password didn't match alright"
                })
            }

            //if username doesn't exist
        }
        else {
            console.log(user)
            console.log("user doesn't exist")

            return res.status(422).json({
                error: "Username doesn't exist"
            })
        }
    }
})
export default router;