import { expressjwt } from 'express-jwt'
import config from '../config'

export const AuthorizedUserOnly = (request, response, next) => {
  const getTokenFromHeader = request => {
    if ((
      request.headers.authorization && request.headers.authorization.split(' ')[0] === 'Token') || 
      (request.headers.authorization && request.headers.authorization.split(' ')[1] === 'Bearer')) {
      return request.headers.authorization.split(' ')[1]
    }
    return null
  }

  const isAuth = expressjwt({
    secret: config.JWT_SECRET,
    userProperty: 'token',
    algorithms: ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'HS256', 'HS384', 'HS512', 'none'],
    getToken: getTokenFromHeader
  })

  return isAuth
}