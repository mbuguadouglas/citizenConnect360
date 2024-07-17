import Joi from 'joi'

export const registerSchema = Joi.object({
    name:Joi.string().min(3).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(6).max(10).required(),
    acceptTos:Joi.boolean().truthy('yes').valid(true).required()    //terms of service




    // email:Joi.string().required().email().messages{-> find out later}
    // u_password:Joi.string().required().pattern(
    //     new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')
    // )

})