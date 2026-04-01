import express from "express"
import LoginWithOtpController from "../controller/LoginWithOtp"




const router = express.Router()

router.post("/LoginWithOtp",LoginWithOtpController)
export default router