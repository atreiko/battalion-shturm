import {
  getValors,
  createValor,
  getValorById,
  deleteValorById
} from '../../services/valor.service'

import {
  ValorsListItemMapper,
  ValorMapper
} from './valors.mapper'

/**
 * @desc Retrieve valors list
 **/
 export const ValorsListController = async (request, response, next) => {
  try {
    const { offset, limit } = request.query
    
    const valors = await getValors({
      offset,
      limit
    })

    return response
      .status(200)
      .json({
        status: 'success',
        data: Array.isArray(valors)
        ? valors?.map(valor => ValorsListItemMapper(valor))
        : []
      })
  } catch (error) {
    next(error)
  }

  return response
  .status(200)
  .json({
    success: true,
    data
  })
}

/**
 * @desc Create valor
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 * @return {Promise}
 **/
 export const CreateValorController = async (request, response, next) => {

  try {
    const { title, rank, image, dateOfBirth, description } = request.body

    const valor = ValorMapper(
      await createValor({
        title,
        image,
        rank,
        dateOfBirth,
        description
      })
    )

    return response
      .status(201)
      .json({
        status: true,
        valor
      })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc Find valor by ID
 **/
 export const ValorByIdController = async (request, response, next) => {

  try {
    const { valorId } = request.params
    const valor = await getValorById(valorId)

    if (!valor) {
      throw new Error('Valor not found.')
    }

    return response
      .status(200)
      .json({
        status: true,
        valor: ValorMapper(valor)
      })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc Delete valor by ID
 **/
 export const DeleteValorByIdController = async (request, response, next) => {

  try {
    const { valorId } = request.params
    const valor = await deleteValorById(valorId)

    if (!valor) {
      throw new Error('Valor not found.')
    }

    return response
      .status(200)
      .json({
        status: true,
        valor: ValorMapper(valor)
      })
  } catch (error) {
    next(error)
  }
}

