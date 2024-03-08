import axios from 'axios'
const API_URL = process.env.API_URL || 'http://localhost:8080'
const STORY_SERVICE_URL =
  process.env.STORY_SERVICE_URL || 'http://localhost:50051'

interface newStoryData {
  authorId: string
  content: string
  title: string
  subtitle: string
  tags: string[]
}

class StoryServices {
  async newStory(data: newStoryData, jwtToken: string) {
    return axios.post(`${STORY_SERVICE_URL}/story`, data, {
      headers: { Authorization: jwtToken },
    })
  }
  async getMyStories(jwtToken: string) {
    return axios.get(`${STORY_SERVICE_URL}/recommend`, {
      data: { usedId: '', count: 2, skip: 0 },
      headers: { Authorization: jwtToken },
    })
  }
  async getStoryById(_id: string) {
    return axios.get(`${STORY_SERVICE_URL}/story`, { params: { storyId: _id } })
  }

  async getCarouselStories() {
    return axios.get(`${API_URL}/story/retrieve-eight`)
  }
}

const storyServices = new StoryServices()
export default storyServices
