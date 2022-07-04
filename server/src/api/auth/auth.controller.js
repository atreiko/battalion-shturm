import { createUser, userSignIn } from '../../services/user.service'
import UserMapper from './users.mapper'

export const SignUpController = async (request, response, next) => {
  try {
    const {
      login,
      password
    } = request.body
  
    const { user, token } = await createUser({
      login,
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

export const SignInController = async (request, response, next) => {
  const req = request
  console.log('>>>---REQUEST--->', req);

  try {
    const { 
      login, 
      password 
    } = request.body

    const { user, token } = await userSignIn({
      login, 
      password
    })

    response
      .status(200)
      .json({
        status: true,
        token,
        user: UserMapper(user)
      })
  
  } catch (error) {
    next(error)
  }
}
