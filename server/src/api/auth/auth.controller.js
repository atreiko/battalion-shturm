import { createUser } from '../../services/user.service'
import UserMapper from './users.mapper'

export const SignUpController = async (request, response, next) => {
  try {
    const {
      email,
      first_name,
      last_name,
      password
    } = request.body
  
    const { user, token } = await createUser({
      email,
      first_name,
      last_name,
      password
    })
  
    response
      .status(201)
      .json({
        status: true,
        token,
        user: UserMapper(user)
      })
  } catch (error) {
    next(error)
  }
}
