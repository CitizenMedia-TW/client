import axios from 'axios'
const API_URL = process.env.API_URL || 'http://localhost:8080'

interface newStoryData {
  content: string
  title: string
  subTitle: string
  tags: string[]

  confirmList: string[] // Confirm list of images which are used in the final story
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
    return await axios.post(`${API_URL}/grpc-story/create`, data, {
      headers: { authorization: `Bearer ${jwtToken}` },
    })
  }

  async getMyStories(jwtToken: string) {
    return axios.get(`${API_URL}/grpc-story/retrieve`, {
      headers: { authorization: `Bearer ${jwtToken}` },
    })
  }

  async getStoryById(_id: string) {
    const story = await axios.get(`${API_URL}/grpc-story/retrieve-by-id`, {
      params: { id: _id },
    })
    return story
  }

  async getPreview(id: string) {
    const preview = await axios.get(`${API_URL}/grpc-story/preview`, {
      params: { id: id },
    })
    return preview
  }

  async getCarouselStories() {
    return await axios.get(`${API_URL}/grpc-story/get-recommended`)
  }
}

const storyServices = new StoryServices()
export default storyServices
