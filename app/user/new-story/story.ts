import { StoryServices } from '@/api/services'

type Story = {
  title: string
  subTitle: string
  content: string
  tags: string[]

  jwtToken: string
}

function parseImages(story: string): string[] {
  const storyJson = JSON.parse(story)
  console.log(storyJson.blocks)
  let imageList: string[] = []
  for (const block of storyJson.blocks) {
    if (block.type === 'image') {
      imageList.push(block.data.file.id)
    }
  }
  return imageList
}

export async function POST(req: Story) {
  const { title, subTitle, content, tags, jwtToken } = req
  const confirmList = parseImages(content)
  console.log(confirmList)
  return await StoryServices.newStory(
    { title, subTitle, content, tags, confirmList },
    jwtToken
  )
}
