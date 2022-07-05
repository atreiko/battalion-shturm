import axios from './axios'

export default class IndexService {
  static async getHome() {
    const response = await axios.get('/v1')
    return response.data
  }
}