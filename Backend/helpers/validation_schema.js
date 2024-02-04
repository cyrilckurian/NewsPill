const Joi = require('@hapi/joi')

//const pattern = "/(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!#.])[A-Za-zd$@$!%*?&.]{8,20}/";

const authSchema = Joi.object({
	email: Joi.string().email().lowercase().required(),
	password: Joi.string().min(2).required()
	//.regex(RegExp(pattern)) 
	,

})

module.exports = {
	authSchema : authSchema,
}