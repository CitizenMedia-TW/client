'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { StoryServices } from '@/api/services'
import Tags from '@yaireo/tagify/dist/react.tagify'
import '@yaireo/tagify/dist/tagify.css'

import dynamic from 'next/dynamic'
import { OutputData } from '@editorjs/editorjs'
const EditorBlock = dynamic(() => import('@/app/components/editor/Editor'), {
  ssr: false,
})

interface storyData {
  title: string
  subTitle: string
}

const Home = () => {
  const { data: session } = useSession()

  const [content, setContent] = React.useState<OutputData>()

  const [storyData, setStoryData] = useState<storyData>({
    title: '',
    subTitle: '',
  })
  const [tags, setTags] = useState<{ tags: string[] }>({ tags: [] })

  /*
   * req.body = {
   *  email: string,
   *  title: string,
   *  subTitle: string,
   *  content: string,
   *  tags: string[],
   * }
   */

  const handlePost = async () => {
    // Check if all the fields are filled
    if (
      storyData.title === '' ||
      storyData.subTitle === '' ||
      content == (undefined || null)
    ) {
      window.alert('Please fill all the fields')
      return
    }
    console.log(session)
    // Post the story
    if (!session || !session.user || !session.user.id)
      return window.alert('You need to be logged in to post a story')
    const response = await StoryServices.newStory(
      {
        authorId: session.user.id,
        ...storyData,
        content: JSON.stringify(content),
        ...tags,
      },
      session?.user.jwtToken as string
    )
    if (response.status === 200) {
      window.alert('Story created')
      window.location.href = `/stories/${response.data.storyId}`
    }
  }
  const handleSave = async () => {
    /* TODO: handle save */
    console.log('save')
  }

  const tagOnChange = React.useCallback((e: any) => {
    const allTags: [] = e.detail.tagify
      .getCleanValue()
      .map((tagifyTags: any) => tagifyTags.value)
    setTags({ tags: allTags })
    /* console.log( */
    /*   'CHANGED:', */
    /*   e.detail.tagify.value, // Array where each tag includes tagify's (needed) extra properties */
    /*   e.detail.tagify.getCleanValue(), // Same as above, without the extra properties */
    /*   e.detail.value // a string representing the tags */
    /* ) */
  }, [])

  return (
    <div className="flex flex-col gap-2 m-10">
      <section className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setStoryData({ ...storyData, title: e.target.value })
          }}
          className="w-64 text-black"
        />
        <input
          type="text"
          placeholder="Subtitle"
          onChange={(e) => {
            setStoryData({ ...storyData, subTitle: e.target.value })
          }}
          className="w-64 text-black"
        />
      </section>
      <div className="justify-items-center mx-20">
        <EditorBlock
          data={content}
          onDataChange={setContent}
          holder="editorjs-container"
          readOnly={false}
        />
      </div>
      <div className="h-10" />
      <Tags
        onChange={tagOnChange}
        placeholder="tags"
        whitelist={[]}
        settings={{ autoComplete: { enabled: true } }}
      />
      <section className="flex gap-2 m-5 justify-end">
        <button onClick={() => handleSave()}>Save</button>
        <button onClick={() => handlePost()}>Post</button>
      </section>
    </div>
  )
}

export default Home
