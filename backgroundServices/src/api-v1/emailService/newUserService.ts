import ejs from 'ejs'
import { User, UserEmail } from '../models/userModels'
import { sendWelcomeEmail } from '../helpers'
import { DbHelper } from '../databaseHelpers'

// instatitate the database helpers class
const db = new DbHelper()


export async function newUser(){
    try{        
        // get all the users who havent gotten the welcome email
        let users = (await db.get('getNewUser')).recordset as Array<User>        

        // console.log(users) //-> confirm code gets the users it should send email to
        
        // loop through each user, sending the message
        users.forEach( (user)=>{

            // build the message to be sent
            ejs.renderFile("templates/register.ejs", {
                title:"Registration Success!",
                name:user.name,
                message:"Thanks for signing up to our website. We're very excited to have you on board.",
                confirmation_url : "www.citizenConnect.co.ke",
                company_name:"citizenConnect360"},
                async (err,data)=>{
                    // console.log(data)    //-> confirm ejs is modified

                    let messageOptions:UserEmail = {
                        to:user.email,
                        from:process.env.MAIL_HOST,
                        subject: "Welcome on board",
                        html: data
                    }

                    console.log(messageOptions)
                    // send the email
                    sendWelcomeEmail(messageOptions) 

                    // update emails sent to prevent continous loop
                    await db.exec('updateUserEmailSent',{
                        id:user.id
                    })
    
        })
        // printed to console once all emails have been sent
        console.log('Successfully completed sending emails to all new users!')
        }
    ) 

    } catch(error) {
        // print if theres any error
        console.log('An error occured:',error)
    }
}