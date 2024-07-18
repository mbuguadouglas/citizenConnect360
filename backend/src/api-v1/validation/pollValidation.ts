import Joi from 'joi'

export const pollSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    userId:Joi.string().required()

})
