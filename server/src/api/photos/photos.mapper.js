import { addCreationAndUpdatingDate } from '../../utils/entities'

export const PhotosListItemMapper = photo => ({
  id: photo._id,
  title: photo.title,
  image: photo.image,
  description: photo.description
})

export const PhotoMapper = photo => ({
  id: photo._id,
  title: photo.title,
  image: photo.image,
  description: photo.description,
  ...addCreationAndUpdatingDate(photo)
})