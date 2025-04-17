import express from 'express'
import { usersRouter } from './users/index.js'

const router = express.Router()

const defaultRoutes = [
  {
    path: '/users',
    route: usersRouter,
  },
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

export default router
