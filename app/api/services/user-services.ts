import axios from 'axios'
const BROKER_SERVICE_URL =
  process.env.BROKER_SERVICE_URL || 'http://localhost:8080'

class UserServices {
  async getProfileLinks(jwtToken: string) {
    if (!jwtToken) return { data: 'No token' }
    return await axios.get(`${BROKER_SERVICE_URL}/user/profile-links`, {
      headers: { Authorization: jwtToken },
    })
  }
  async getPublicUser(id: string) {
    return await axios.get(`${BROKER_SERVICE_URL}/user/public-profile/${id}`)
  }
}

const userServices = new UserServices()
export default userServices
