'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { StoryServices, UserServices } from '@/api/services'
import { Skeleton } from '@/components/ui/skeleton'
import { PrimarySection, SectionContent } from '@/components/PrimarySection'
import { Loading } from '@/components/Loading'
import { Button } from '@/components/ui/button'

import Comments from './Comments'

import { Story } from '@/types/stories'

import dynamic from 'next/dynamic'
import { OutputData } from '@editorjs/editorjs'
const EditorBlock = dynamic(() => import('@/app/components/editor/Editor'), {
  ssr: false,
})

type AuthorInfo = {
  name: string
  email: string
  avatar: string
  profileLinks: { [key: string]: string }
}

function AuthorSection({ data }: { data: Story }) {
  const [authorInfo, setAuthorInfo] = useState<AuthorInfo | null>(null)
  useEffect(() => {
    async function fetchData() {
      const res = await UserServices.getPublicUser(data.authorId)
      if (res && !res.data.error) {
        console.log(res.data)
        setAuthorInfo(res.data)
      }
    }
    fetchData()
  }, [data.authorId])

  if (!authorInfo) {
    return <Skeleton className="h-full w-full" />
  }

  //console.log(authorInfo)

  return (
    <PrimarySection title="Section!!">
      <Image
        src={authorInfo.avatar}
        alt="author image"
        width="30"
        height="30"
      />
      <SectionContent>
        <p>{authorInfo.name}</p>
        {authorInfo.profileLinks &&
          Object.keys(authorInfo.profileLinks).map((key) => (
            <p key={key}>
              {key}: {authorInfo.profileLinks[key]}
            </p>
          ))}
      </SectionContent>
    </PrimarySection>
  )
}

export default function Page({ params }: { params: { storyid: string } }) {
  const [isShow, setShow] = useState<'hidden' | ''>('hidden')

  const handle_showMore_click = () => {
    if (isShow === 'hidden') {
      setShow('')
    } else {
      setShow('hidden')
    }
  }

  const [data, setData] = useState<Story | null>(null)
  const [content, setContent] = useState<OutputData | null>(null)
  const [dataReady, setDataReady] = useState<boolean>(false)

  useEffect(() => {
    async function fetchData() {
      const res = await StoryServices.getStoryById(params.storyid)
      if (res && res.status === 200) {
        setData(res.data.story)
        setContent(JSON.parse(res.data.story.content))
        setDataReady(true)
      }
    }
    fetchData()
  }, [params.storyid])

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row px-10">
        <section className="basis-3/4">
          <div className="h-9" />
          {dataReady && content ? (
            <div className="">
              <h1>{data?.title}</h1>
              <EditorBlock
                data={content}
                onDataChange={setContent}
                holder="editorjs-container"
                readOnly={true}
              />
              <p>Tags: {data && data.tags.join(', ')}</p>
              <div className="h-9" />
            </div>
          ) : (
            <Loading />
          )}
          <section className="section">
            <p className="section-title">Comments</p>
            <Button
              className="border-2 border-slate-400 bg-background text-slate-600 dark:text-gray-100 rounded-3xl hover:bg-slate-200 dark:hover:bg-slate-600"
              onClick={handle_showMore_click}
            >
              Show more
            </Button>
            {/* <Comments/> */}
          </section>
        </section>
        <div className="h-9 block md:hidden" />

        <section className="basis-1/4">
          <div className="h-9" />
          <section className="section">
            {dataReady && data ? (
              // <p>{data.author}</p>
              <AuthorSection data={data} />
            ) : (
              <span className="loading loading-spinner" />
            )}
          </section>
        </section>
      </div>
      {/* <div className={`fixed bottom-6 w- right-0 ${isShow}`}> */}
      <Comments
        isShow={isShow}
        setShow={setShow}
        storyId={params.storyid}
        className={`fixed bottom-6 w-[300px] right-10 ${isShow}`}
      />
    </div>
  )
}
