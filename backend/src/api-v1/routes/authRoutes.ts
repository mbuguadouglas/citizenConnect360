import {Router} from 'express'
import { loginUser, registerUser } from '../controllers/authController'
// import { verifyAuthToken } from '../middleware/authMiddleware'

const authRouter = Router()

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
// authRouter.post("/user",getByEmail)
// authRouter.post("/user",updateUser)
// authRouter.post("/:id",deleteUser)
// authRouter.post("/:id",getById)


export default authRouter
