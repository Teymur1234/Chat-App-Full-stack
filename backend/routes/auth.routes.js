import express from "express";

const router=express.Router()

import { signup,login,logout } from "../controllers/auth.controller.js";

router.post("/signup",signup)
router.post("/signin",login)
router.post("/logout",logout)

export default router