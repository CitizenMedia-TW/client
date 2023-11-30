import axios from 'axios'
const IMAGE_API_URL = process.env.API_URL || 'http://localhost:80'

class ImageService {
  async postImage(formData: FormData) {
    try {
      const res = await axios.post(
        `${IMAGE_API_URL}/upload?collection=editor`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
      return {
        success: 1,
        file: {
          url: `${IMAGE_API_URL}/display?_id=${res.data.id}&collection=editor`,
          _id: res.data.id,
        },
      }
    } catch (err) {
      return {
        success: 0,
      }
    }
  }
  async deleteImage(_id: string) {
    return axios.delete(`${IMAGE_API_URL}/delete?_id=${_id}&collection=editor`)
  }
}

const imageService = new ImageService()
export default imageService
