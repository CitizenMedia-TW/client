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
