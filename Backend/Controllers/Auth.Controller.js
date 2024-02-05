const createError = require('http-errors')
const User = require('../Models/User.model')
const { authSchema } = require('../helpers/validation_schema')
const { 
	signAccessToken, 
	signRefreshToken, 
	verifyRefreshToken
} = require('../helpers/jwt_helper')
const client = require('../helpers/init_redis')


module.exports = {
	register: async (req, res, next) => {
	
		try {
			//const { email, password } = req.body
			//if (!email || !password) throw createError.BadRequest()
			//else res.send('Found email and password')
	
			const result = await authSchema.validateAsync(req.body)
			//console.log(result)
	
			const doesExist = await User.findOne({email: result.email})
			if (doesExist) 
				throw createError.Conflict(`${result.email} is already been registered`)
	
			const user = new User(result)
			const savedUser = await user.save()
	
			const accessToken = await signAccessToken(savedUser.id)
			const refreshToken = await signRefreshToken(savedUser.id)
	
			res.send({accessToken, refreshToken})
			
		} catch (error) {
			console.log('Error in register route:')
			if (error.isJoi == true) error.status = 422
			next(error)
		}
		
	},

	login: async (req, res, next) => {
		try {
			const result = await authSchema.validateAsync(req.body)
			const user = await User.findOne({email: result.email})
	
			if (!user) throw createError.NotFound("User not registered")
	
			const isMatch = await user.isValidPassword(result.password)
			if (!isMatch) throw createError.Unauthorized('Username/password not valid')
	
			const accessToken = await signAccessToken(user.id)
			const refreshToken = await signRefreshToken(user.id)
			
			res.send({accessToken, refreshToken})
		} catch (error) {
			if (error.isJoi == true) return next(createError.BadRequest("Invalid Username or Password"))
			next(error)
		}
	},

	refreshToken: async (req, res, next) => {
		try {
			const {refreshToken} = req.body
			if (!refreshToken) throw createError.BadRequest()
			const userId = await verifyRefreshToken(refreshToken)
	
			const accessToken = await signAccessToken(userId)
			const refToken = await signRefreshToken(userId)
			res.send({ accessToken: accessToken, refreshToken: refToken})
	
		} catch (error) {
			next(error)
		}
	},

	logout: async(req, res, next) => {
		try {
			const { refreshToken } = req.body
			if (!refreshToken) throw createError.BadRequest()
			const userId = await verifyRefreshToken(refreshToken)
			client.GET(userId, async (err, val) => {
				if (err) {
					console.error(err.message);
					throw createError.InternalServerError();
				}
	
				if (val) {
					
					client.DEL(userId, (delErr, delVal) => {
						if (delErr) {
							console.error(delErr.message);
							throw createError.InternalServerError();
						}
						console.log(delVal);
						res.sendStatus(204);
					});
				} else {
					
					res.status(401).send({
						error: {
							status: 401,
							message: 'Unauthorized',
						},
					});
				}
			});
			
		} catch (error) {
			next(error)
		}
	}
}