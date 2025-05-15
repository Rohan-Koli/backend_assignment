import express from 'express'
import { signup,login,logout } from '../controllers/auth.controller.js'
import { validateSignup } from '../middlewares/signup.validation.js'
import { validateLogin } from '../middlewares/login.validation.js'
export const authRouter = express.Router()


authRouter.post("/signup",validateSignup,signup)

authRouter.post("/login",validateLogin,login)

authRouter.get("/logout",logout)