import Valor from '../models/valor.model'

/**
 * @desc Retrieve soldiers list
 **/
export const getValors = async ({
  offset = 0,
  limit = 18
}) => Valor.find({}, null, {
  skip: parseInt(offset),
  limit: parseInt(limit)
})

/**
 * @desc Create product
 * @return {Promise}
 **/
export const createValor = async ({
  title, image, rank, dateOfBirth, description
}) => {
  return Valor.create({
    title,
    image,
    rank,
    dateOfBirth,
    description
  })
}

/**
 * @desc Search soldier by Id
 **/
export const getValorById = async id => Valor.findById(id)

/**
  * @desc Delete soldier by ID
  **/
export const deleteValorById = async id => Valor.findByIdAndDelete(id)