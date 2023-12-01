// Note: This is a dynamic route
'use client'
import React from 'react'
import { StoryServices } from '@/api/services'

import dynamic from 'next/dynamic'
import { OutputData } from '@editorjs/editorjs'
const EditorBlock = dynamic(() => import('@/app/components/editor/Editor'), {
  ssr: false,
})

interface Story {
  _id: string
  author: string
  authorId: string
  content: string
  title: string
  subTitle: string
  createdAt: string
  comments: string[]
  tags: string[]
}

export default function Page({ params }: { params: { storyid: string } }) {
  const [data, setData] = React.useState<Story | null>(null)
  const [content, setContent] = React.useState<OutputData | null>(null)
  const [dataReady, setDataReady] = React.useState<boolean>(false)

  React.useEffect(() => {
    async function fetchData() {
      const res = await StoryServices.getStoryById(params.storyid)
      if (res && res.data != 'Story not found') {
        setData(res.data)
        setContent(JSON.parse(res.data.content))
        setDataReady(true)
      }
    }
    fetchData()
  }, [params.storyid])

  return (
    <div>
      {dataReady && content ? (
        <div className="prose">
          <h1>{data?.title}</h1>
          <EditorBlock
            data={content}
            onDataChange={setContent}
            holder="editorjs-container"
            readOnly={true}
          />
          <p>Tags: {data && data.tags.join(', ')}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
