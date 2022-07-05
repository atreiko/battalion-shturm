import axios from './axios'

export default class UserService {
  static async SignIn(data) {
    const response = await axios.post('/v1/auth/signin', data)
    return response.data
  }
}