import { Router } from 'express'
import { createUser, deleteUser, loginUser, updateUser } from '../controllers/authController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const authRouter = Router()

authRouter.post(`/register`, createUser)
authRouter.post('/login', loginUser)
authRouter.patch('/profile/:id', authMiddleware, updateUser)
authRouter.delete('/profile/:id', authMiddleware, deleteUser)


export default authRouter