import { Router } from 'express'
import { SoldiersListController } from './soldiers.controller'

const route = Router()

export default function(root) {
  root.use('/soldiers', route)
  route.get('/', SoldiersListController)
}