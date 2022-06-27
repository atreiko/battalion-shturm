import axios from 'axios'

export default class PostService {

  static async getHome() {
    const response = await axios.get('/api/v1')
    return response.data
  }

  static async getSoldiersPosts() {
    const response = await axios.get('/api/v1/soldiers')
    console.log(response);
    return response.data
  }


  static async getValorPosts() {
    const response = await axios.get('/api/v1/valors')
    return response.data
  }

  static async getPhotoPosts() {
    const response = await axios.get('/api/v1/photos')
    return response.data
  }
}



