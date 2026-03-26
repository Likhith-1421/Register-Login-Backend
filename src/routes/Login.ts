import express from "express"
import LoginController from "../controller/LoginController"

const router = express.Router()

router.post("/Login",LoginController)
export default router