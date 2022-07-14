import { 
  getSoldiers, 
  createSoldier,
  getSoldierById,
  deleteSoldierById 
} from '../../services/soldier.service'

import { 
  SoldiersListItemMapper, 
  SoldierMapper 
} from './soldiers.mapper'

/**
 * @desc Retrieve soldiers list
 **/
export const SoldiersListController = async (request, response, next) => {
  try {
    const { offset, limit } = request.query
    
    const soldiers = await getSoldiers({
      offset,
      limit
    })

    return response
      .status(200)
      .json({
        status: 'success',
        data: Array.isArray(soldiers)
        ? soldiers?.map(soldier => SoldiersListItemMapper(soldier))
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
 * @desc Create soldier
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 * @return {Promise}
 **/
export const CreateSoldierController = async (request, response, next) => {
  try {
    const { title, rank, image, dateOfBirth, description } = request.body

    const soldier = SoldierMapper(
      await createSoldier({
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
        soldier
      })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc Find soldier by ID
 **/
export const SoldierByIdController = async (request, response, next) => {
  try {
    const { soldierId } = request.params
    const soldier = await getSoldierById(soldierId)

    if (!soldier) {
      throw new Error('Soldier not found.')
    }

    return response
      .status(200)
      .json({
        status: true,
        data: SoldierMapper(soldier)
      })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc Delete soldier by ID
 **/
export const DeleteSoldierByIdController = async (request, response, next) => {
  try {
    const { soldierId } = request.params
    const soldier = await deleteSoldierById(soldierId)

    if (!soldier) {
      throw new Error('Soldier not found.')
    }

    return response
      .status(200)
      .json({
        status: true,
        soldier: SoldierMapper(soldier)
      })
  } catch (error) {
    next(error)
  }
}