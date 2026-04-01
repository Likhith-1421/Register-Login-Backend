import express from "express"
import VerifyOtpController from "../controller/VerifyOtpController"
import VerifyToken from "../Middleware/authMiddleWare"


const router = express.Router()

router.post("/VerifyOtp",VerifyOtpController)
export default router