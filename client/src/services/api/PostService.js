import axios from './axios'

export default class PostService {

  static async getSoldierPosts() {
    const response = await axios.get('/v1/soldiers')
    return response.data
  }

  static async getValorPosts() {
    const response = await axios.get('/v1/valors')
    return response.data
  }

  static async getPhotoPosts() {
    const response = await axios.get('/v1/photos')
    return response.data
  }
}



