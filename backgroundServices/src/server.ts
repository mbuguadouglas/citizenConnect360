import express from 'express'
import cron from 'node-cron'
import { newUser } from './api-v1/emailService/newUserService';


const app = express()

cron.schedule('*/5 * * * * *', async () => {    //-> runs after every 5 seconds
 
    await newUser()

});



// start the application
app.listen(4001,()=>{
    console.log('backGround Server is up!!...')
})
