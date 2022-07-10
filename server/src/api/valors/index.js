import { Router } from 'express'

import {
  CreateValorController,
  ValorsListController,
  ValorByIdController,
  DeleteValorByIdController
} from './valors.controller'

import { AuthorizedUserOnly } from '../middleware'

const route = Router()

export default function(root) {
  root.use('/valors', route)
  route.get('/', ValorsListController)
  route.post('/',
    AuthorizedUserOnly(),
    CreateValorController
  )
  route.get('/:valorId', ValorByIdController)
  route.delete('/:valorId',
    AuthorizedUserOnly(),
    DeleteValorByIdController
  )
}