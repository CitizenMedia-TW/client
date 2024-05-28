import { NextResponse } from 'next/server'

import axios from 'axios'

import { StoryPreview } from '@/types/stories'

const STORY_SERVICE_URL =
  process.env.STORY_SERVICE_URL || 'http://localhost:50051'

async function getStoryById(_id: string) {
  return await axios.get(`${STORY_SERVICE_URL}/story`, {
    params: { storyId: _id },
  })
}

export const GET = async (request: Request) => {
  try {
    const { data: recommendStories } = await axios.get(
      `${STORY_SERVICE_URL}/recommend`,
      {
        params: { usedId: '', count: 2, skip: 0 },
      }
    )

    let stories: StoryPreview[] = []

    for (const id of recommendStories.storyIdList) {
      const { data, status } = await getStoryById(id)

      if (status === 200) {
        stories.push({ id, ...data.story } as StoryPreview)
      }
    }

    return new NextResponse(JSON.stringify(stories), { status: 200 })
  } catch (error: any) {
    return new NextResponse(JSON.stringify(error), { status: 500 })
  }
}
