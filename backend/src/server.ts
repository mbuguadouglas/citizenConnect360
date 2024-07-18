import express, {json} from 'express'
import cors from 'cors'
import authRouter from './api-v1/routes/authRoutes'
import viewRouter from './api-v1/routes/viewRoutes'

const app = express()   // initialize the application

app.use(json())          //add a body to the requests
// app.use(cors()) //for communication with the frontend


// add middleware and respective urls
app.use("/auth", authRouter)
app.use("/views", viewRouter)


// start the application
app.listen(4000,()=>{
    console.log('Wagwan. Server inarun...')
})
