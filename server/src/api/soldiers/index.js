import { Router } from 'express'
import { 
  CreateSoldierController, 
  DeleteSoldierByIdController, 
  SoldierByIdController, 
  SoldiersListController 
} from './soldiers.controller'
import { AuthorizedUserOnly } from '../middleware'

const route = Router()

export default function(root) {
  root.use('/soldiers', route)
  route.get('/', SoldiersListController)
  route.post('/', 
    AuthorizedUserOnly(),
    CreateSoldierController
  )
  route.get('/:soldierId', SoldierByIdController)
  route.delete('/:soldierId', 
    AuthorizedUserOnly(), 
    DeleteSoldierByIdController
  )
}