import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

const registerUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body
    //console.log("email: ", email);

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (existedUser) {
        return res.status(409).json(
            new ApiError(409, "User with email or username already exists")
        )
    }
    //console.log(req.files);
    const user = await User.create({
        email,
        password,
        username: username.trim().toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // console.log(email);

    const user = await User.findOne({
        $or: [{ email }]
    })

    if (!user) {
        return res.status(404).json(
            new ApiError(404, "User does not exist"))
    }

    const isPasswordValid = await user.isPasswordCorrect(password)
    const generateAccessToken = await user.generateAccessToken(user)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials")
    }

    const loggedInUser = await User.findById(user._id).select("-password")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                    token:generateAccessToken
                },
                "User logged In Successfully"
            )
        )

})

const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password")
    }

    user.password = newPassword
    await user.save({ validateBeforeSave: false })

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Password changed successfully"))
})

const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            req.user,
            "User fetched successfully"
        ))
})

const sendMail = asyncHandler(async (req, res) => {
    const receivingEmailAddress = ''; // Replace with your receiving email address

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).send('All fields are required');
    }
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other services like SendGrid, Mailgun, etc.
        auth: {
            user: '', // Replace with your email
            pass: ''   // Replace with your email password
        }
    });

    const mailOptions = {
        from: email,
        to: receivingEmailAddress,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    const info = await transporter.sendMail(mailOptions);
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            info.response,
            "Email sent successfully"
        ))
})




export {
    registerUser,
    loginUser,
    changeCurrentPassword,
    getCurrentUser,
    sendMail
}