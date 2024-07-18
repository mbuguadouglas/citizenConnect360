import {Router} from 'express'
import { addIncident, deleteIncident, getIncident, getIncidents, sensorIncident } from '../controllers/incidentControllers'
// import { verifyAuthToken } from '../middleware/authMiddleware'

const incidentRouter = Router()

incidentRouter.post("/add-incident",addIncident)
incidentRouter.get("",getIncidents)
incidentRouter.get("/:id",getIncident)
incidentRouter.patch("/sensor-incident/:id",sensorIncident)
incidentRouter.delete("/:id",deleteIncident)


export default incidentRouter
