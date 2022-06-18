
export const SoldiersListController = (request, response, next) => {
  try {
    response
      .status(200)
      .json({
        status: success,
        data: []
      })
  } catch (error) {
    next(error)
  }
}