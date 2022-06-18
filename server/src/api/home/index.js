import { Router } from 'express'
import { IndexController } from './index.controller'

const route = Router()

export default function(root) {
  root.use('/', route)
  route.get('/', IndexController)
}