import axios from 'axios'
const IMAGE_SERVICE_URL = process.env.IMAGE_SERVICE_URL || 'http://localhost:80'

class ImageService {
  async postImage(formData: FormData) {
    try {
      const res = await axios.post(
        `${IMAGE_SERVICE_URL}/upload?collection=editor`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
      return {
        success: 1,
        file: {
          url: `${IMAGE_SERVICE_URL}/display?_id=${res.data.id}&collection=editor`,
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
    return axios.delete(
      `${IMAGE_SERVICE_URL}/delete?_id=${_id}&collection=editor`
    )
  }
}

const imageService = new ImageService()
export default imageService
