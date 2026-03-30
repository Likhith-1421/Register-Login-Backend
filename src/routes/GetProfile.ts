import GetProfileController from "../controller/GetProfileController";
import express from "express"
import authMiddleWare from "../Middleware/authMiddleWare";

const router = express.Router()

router.get("/GetProfile",authMiddleWare,GetProfileController)
export default router