import {Router} from 'express'
import { addPoll, closePoll, deletePoll, getPoll, getPolls } from '../controllers/pollControllers'
// import { verifyAuthToken } from '../middleware/authMiddleware'

const pollRouter = Router()

pollRouter.post("/add-poll",addPoll)
pollRouter.get("",getPolls)
pollRouter.get("/:id",getPoll)
pollRouter.patch("/close-poll/:id",closePoll)
pollRouter.delete("/:id",deletePoll)


export default pollRouter
