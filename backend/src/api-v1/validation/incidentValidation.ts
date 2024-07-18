import Joi from 'joi'

export const incidentSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    body:Joi.string().required(),
    location:Joi.string().required(),
    imageUrl:Joi.string().required(),
    userId:Joi.string().required()

})
