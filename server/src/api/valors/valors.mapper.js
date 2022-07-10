import { addCreationAndUpdatingDate } from '../../utils/entities'

export const ValorsListItemMapper = valor => ({
  id: valor._id,
  title: valor.title,
  image: valor.image,
  rank: valor.rank,
  dateOfBirth: valor.dateOfBirth,
  description: valor.description
})

export const ValorMapper = valor => ({
  id: valor._id,
  title: valor.title,
  image: valor.image,
  rank: valor.rank,
  dateOfBirth: valor.dateOfBirth,
  description: valor.description,
  ...addCreationAndUpdatingDate(valor)
})