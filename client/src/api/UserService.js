import axios from 'axios'

export default class UserService {
  static async SignIn(data) {
    // const response = await axios.post('/api/v1/auth/signin', data, { headers:{'Content-Type' : 'application/json'} })
    // return response.data
    const res = await axios.post(
      '/api/v1/auth/signin', 
      data
      // { headers:{'Content-Type' : 'application/json'} }
    ).then(res => console.log(res)).catch(error => console.log(error))
  }
}