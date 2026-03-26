import express from "express"
import RegisterController from "../controller/RegisterController"

const router = express.Router()

router.post("/Register",RegisterController)
export default router