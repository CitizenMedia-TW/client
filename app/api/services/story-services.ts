import axios from 'axios'
const BROKER_SERVICE_URL =
  process.env.BROKER_SERVICE_URL || 'http://localhost:8080'
const STORY_SERVICE_URL =
  process.env.STORY_SERVICE_URL || 'http://localhost:50051'

interface newStoryData {
  authorId: string
  content: string
  title: string
  subTitle: string
  tags: string[]
}
interface time {
  seconds: number
  nanos: number
}
export interface Comment {
  id: string
  content: string
  commenter: string
  commenterId: string
}
export interface Story {
  id: string // Not given by story-service
  author: string
  authorId: string
  content: string
  comments: Comment[]
  title: string
  subTitle: string
  createdAt: time
  tags: string[]
}

export interface StoryPreview {
  id: string
  author: string
  title: string
  subTitle: string
  createdAt: time
  tags: string[]
}

class StoryServices {
  // Private methods
  private async getRecommended(jwtToken: string) {
    return await axios.get(`${STORY_SERVICE_URL}/recommend`, {
      params: { usedId: '', count: 10, skip: 0 },
      headers: { Authorization: jwtToken },
    })
  }

  // Public methods
  async newStory(data: newStoryData, jwtToken: string) {
    return axios.post(`${STORY_SERVICE_URL}/story`, data, {
      headers: { Authorization: jwtToken },
    })
  }

  // Temporarily using get recommended stories as get my stories
  async getMyStories(jwtToken: string) {
    const res = await this.getRecommended(jwtToken)
    if (res.status != 200) return null
    let stories: Story[] = []
    for (let id of res.data.storyIdList) {
      const singleStory = await this.getStoryById(id)
      if (singleStory.status == 200)
        stories.push({ ...singleStory.data.story, id: id })
    }
    return stories
  }

  async getStoryById(_id: string) {
    return axios.get(`${STORY_SERVICE_URL}/story`, { params: { storyId: _id } })
  }

  async getCarouselStories() {
    return await this.getMyStories('tmp')
  }

  async getLatestStories() {
    const tmp = await axios.get(`${STORY_SERVICE_URL}/recommend`, {
      params: { usedId: '', count: 2, skip: 0 },
    })
    if (tmp.status != 200) return null
    let stories: StoryPreview[] = []
    for (let id of tmp.data.storyIdList) {
      const singleStory = await this.getStoryById(id)
      if (singleStory.status == 200)
        stories.push({ ...singleStory.data.story, id: id } as StoryPreview)
    }
    console.log(stories)
    return stories
  }
}

const storyServices = new StoryServices()
export default storyServices
