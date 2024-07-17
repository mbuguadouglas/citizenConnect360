import {Router} from 'express'
import { changePassword, getUserByEmail, getUserById, getUsers, loginUser, registerUser, resetPassword } from '../controllers/authController'
// import { verifyAuthToken } from '../middleware/authMiddleware'

const authRouter = Router()

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.post("/change-password",changePassword)
authRouter.get("/users",getUsers)
authRouter.get("/user-email",getUserByEmail)
// authRouter.post("/user",updateUser)
// authRouter.post("/:id",deleteUser)
authRouter.get("/:id",getUserById)


export default authRouter
