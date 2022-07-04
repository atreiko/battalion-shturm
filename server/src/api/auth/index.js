import { Router } from 'express'

import { 
  SignUpController, 
  SignInController
} from './auth.controller'

const route = Router()

export default function(root) {
  root.use('/auth', route)
  route.post('/signup', SignUpController)
  route.post('/signin', SignInController)
}