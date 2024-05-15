import axios from 'axios'
const BROKER_SERVICE_URL =
  process.env.BROKER_SERVICE_URL || 'http://localhost:8080'

class UserServices {
  async getProfileLinks(jwtToken: string) {
    console.log(jwtToken)
    if (!jwtToken) return { data: ['No token'] }
    return await axios.get(`${BROKER_SERVICE_URL}/user/profile-links`, {
      headers: { Authorization: jwtToken },
    })
  }
  async getPublicUser(id: string) {
    return await axios.get(`${BROKER_SERVICE_URL}/user/public-profile/${id}`)
  }
  async modifyProfileLinks(jwtToken: string, modifiedLinks: string[]){
    if (!jwtToken) return { data: ['No token'] }
    console.log("modified links", modifiedLinks)
    return await axios.patch(`${BROKER_SERVICE_URL}/user/profile-links`,
    {//these code should be updata after backend changed
    //should have the only parameter: modify: modifiedLinks
      remove: [],
      add: modifiedLinks
    }, {
      headers: { Authorization: jwtToken },
    })
  }
}

const userServices = new UserServices()
export default userServices
