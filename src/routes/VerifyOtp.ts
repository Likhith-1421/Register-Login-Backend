import express from "express"
import VerifyOtpController from "../controller/VerifyOtpController"


const router = express.Router()

router.post("/VerifyOtp", VerifyOtpController)
export default router