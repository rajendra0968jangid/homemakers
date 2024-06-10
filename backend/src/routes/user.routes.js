import { Router } from "express";
import {
    loginUser,
    registerUser,
    sendMail
} from "../controllers/user.controller.js";


const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/send_mail").post(sendMail)

export default router