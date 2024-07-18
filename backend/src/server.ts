import express, {json} from 'express'
import cors from 'cors'
import authRouter from './api-v1/routes/authRoutes'
import viewRouter from './api-v1/routes/viewRoutes'
import incidentRouter from './api-v1/routes/incidentRoutes'
import pollRouter from './api-v1/routes/pollRoutes'

const app = express()   // initialize the application

app.use(json())          //add a body to the requests
// app.use(cors()) //for communication with the frontend


// add middleware and respective urls
app.use("/auth", authRouter)
app.use("/views", viewRouter)
app.use("/incidents", incidentRouter)
app.use("/polls", pollRouter)


// start the application
app.listen(4000,()=>{
    console.log('Mashallah! The server is running...')
})
