const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const userSchema = require('../models/user')

router.use(express.json());
const salt = 10;

//post api for user signup

router.post('/signup', async (req, res) => {
    try {
        const { email, password, cpassword } = req.body;
        if (!email || !password || !cpassword) {
            return res.status(400).json({
                status: "failed",
                message: "all fields are required"
            })
        }
        const userEmail = await userSchema.findOne({ email })
        if (userEmail) {
            return res.status(400).json({
                status: "failed",
                message: "user is already registered"
            })
        }
        if (password !== cpassword) {
            return res.status(400).json({
                status: "failed",
                message: "password does not match"
            })
        }
        // hashing password

        else {

            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) {
                    return res.status(400).json({
                        status: "failed",
                        message: err.message
                    })
                }
                const userData = await userSchema.create({
                    email: email,
                    password: hash
                })
                return res.status(200).json({
                    status: "success",
                    message: "user is registered successfully!",
                    userData
                })
            })
        }

    } catch (err) {
        res.status(400).json({
            status: "failed",
            meassage: err.meassage
        })
    }
})
module.exports = router;