import express from "express"
import LoginOtpController from "../controller/LoginOtpController"

const router = express.Router()

router.post("/LoginOtp", LoginOtpController)
export default router