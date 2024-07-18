import {Router} from 'express'
import { changePassword, deleteUser, forgotPassword, getUserByEmail, getUserById, getUsers, loginUser, registerUser, resetPassword, updateUser } from '../controllers/authControllers'
// import { verifyAuthToken } from '../middleware/authMiddleware'

const authRouter = Router()

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.post("/change-password",changePassword)
authRouter.post("/forgot-password",forgotPassword)
authRouter.get("/users",getUsers)
authRouter.get("/user-email",getUserByEmail)
authRouter.get("/:id",getUserById)
authRouter.patch("/:id",updateUser)
authRouter.delete("/:id",deleteUser)


export default authRouter
