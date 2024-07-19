import Joi from 'joi'

export const voteSchema = Joi.object({
    userId:Joi.string().required(),
    pollId:Joi.string().required(),
    choiceMade:Joi.string().required()
})
