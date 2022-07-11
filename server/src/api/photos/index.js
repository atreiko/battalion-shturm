import { Router } from 'express'

import {
  CreatePhotoController,
  PhotosListController,
  PhotoByIdController,
  DeletePhotoByIdController
} from './photos.controller'

import { AuthorizedUserOnly } from '../middleware'

const route = Router()

export default function(root) {
  root.use('/photos', route)
  route.get('/', PhotosListController)
  route.post('/',
    AuthorizedUserOnly(),
    CreatePhotoController
  )
  route.get('/:photoId', PhotoByIdController)
  route.delete('/:photoId',
    AuthorizedUserOnly(),
    DeletePhotoByIdController
  )
}