import GetProfileController from "../controller/GetProfileController";
import express from "express"
import VerifyToken from "../Middleware/authMiddleWare";

const router = express.Router()

router.get("/GetProfile",VerifyToken,GetProfileController)
export default router