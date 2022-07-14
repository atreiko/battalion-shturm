import axios from './axios'

export default class PostService {

  static async getSoldierPosts() {
    const response = await axios.get('/v1/soldiers')
    return response.data
  }

  static async getSoldierByID(id) {
    const response = await axios.get(`/v1/soldiers/${id}`)
    return response.data
  }

  static async getValorPosts() {
    const response = await axios.get('/v1/valors')
    return response.data
  }

  static async getValorByID(id) {
    const response = await axios.get(`/v1/valors/${id}`)
    return response.data
  }

  static async getPhotoPosts() {
    const response = await axios.get('/v1/photos')
    return response.data
  }

  static async getPhotoByID(id) {
    const response = await axios.get(`/v1/photos/${id}`)
    return response.data
  }
}



