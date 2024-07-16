import express, {json} from 'express'
import cors from 'cors'

const app = express()   // initialize the application

app.use(json())          //add a body to the requests
// app.use(cors()) //for communication with the frontend

// add middleware and respective urls


// start the application
app.listen(4000,()=>{
    console.log('Wagwan. Server inarun...')
})
