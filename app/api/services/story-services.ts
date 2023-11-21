import axios from 'axios'
const API_URL = process.env.API_URL || 'http://localhost:8080'

interface newStoryData {
  id?: string | null
  content: string
  title: string
  subTitle: string
  tags: string[]
}

class StoryServices {
  /*
   * req.body = {
   *  id: string,
   *  content: string,
   *  title: string,
   *  subTitle: string,
   *  tags: string[],
   * }
   */
  async newStory(data: newStoryData, jwtToken: string) {
    console.log(data)
    return axios.post(`${API_URL}/story/create`, data, {
      headers: { authorization: `Bearer ${jwtToken}` },
    })
  }
  async getMyStories(jwtToken: string) {
    return axios.get(`${API_URL}/story/retrieve`, {
      headers: { authorization: `Bearer ${jwtToken}` },
    })
  }
  async getStoryById(_id: string) {
    return axios.post(`${API_URL}/story/retrieve-by-id`, { _id: _id })
  }

  async getCarouselStories() {
    return axios.get(`${API_URL}/story/retrieve-eight`)
  }
}

const storyServices = new StoryServices()
export default storyServices
