import axios from 'axios'
const API_URL = process.env.API_URL || 'http://localhost:8080'

class UserServices {
  async getProfileLinks(jwtToken: string) {
    if (!jwtToken) return { data: 'No token' }
    return await axios.get(`${API_URL}/user/profile-links`, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    })
  }
  async getPublicUser(id: string) {
    return await axios.get(`${API_URL}/user/public-profile/${id}`)
  }
}

const userServices = new UserServices()
export default userServices
