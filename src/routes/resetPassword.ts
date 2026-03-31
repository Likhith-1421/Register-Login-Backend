import express from "express"
import resetPasswordController from "../controller/resetPasswordController"
import VerifyToken from "../Middleware/authMiddleWare"


const router = express.Router()

router.post("/forgotPassword",VerifyToken,resetPasswordController)
export default router