import express from "express"
import forgotPasswordController from "../controller/resetPasswordController"
import authMiddleWare from "../Middleware/authMiddleWare"


const router = express.Router()

router.post("/forgotPassword",authMiddleWare,forgotPasswordController)
export default router