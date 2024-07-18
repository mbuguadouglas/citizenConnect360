import {Router} from 'express'
import { addView, deleteView, getView, getViews, sensorView, updateView } from '../controllers/viewControllers'
// import { verifyAuthToken } from '../middleware/authMiddleware'

const viewRouter = Router()

viewRouter.post("/add-view",addView)
viewRouter.get("",getViews)
viewRouter.patch("/update-view/:id",updateView)
viewRouter.patch("/sensor-view/:id",sensorView)
viewRouter.get("/:id",getView)
viewRouter.delete("/:id",deleteView)


export default viewRouter
