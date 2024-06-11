type createdTime = {
  seconds: number
  nanos: number
}

export type StoryPreview = {
  id: string
  author: string
  title: string
  subTitle: string
  createdAt: createdTime
  tags: string[]
}

type newStoryData = {
  authorId: string
  content: string
  title: string
  subTitle: string
  tags: string[]
}

export type Comment = {
  id: string
  content: string
  commenter: string
  commenterId: string
}

export type Story = {
  id: string // Not given by story-service
  author: string
  authorId: string
  content: string
  comments: Comment[]
  title: string
  subTitle: string
  createdAt: createdTime
  tags: string[]
}
