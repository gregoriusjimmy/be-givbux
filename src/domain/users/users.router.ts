import express from 'express'
import validate from '../../middlewares/validate.js'
import { createUserSchema } from './schema.js'
import { createUser } from './controller/createUser.js'

const router = express.Router()

router.post('/create', validate(createUserSchema), createUser)

export default router
