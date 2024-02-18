import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { FaRegThumbsUp, FaThumbsUp, FaRegThumbsDown, FaThumbsDown } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { Input } from "@/components/ui/input"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import headshot from '@/public/notifications-head.svg'

const comments_quantity = 20;
const example_text = "Lorem ipsum dolor sit amet consectetur. Netus ut accumsan fames morbi consectetur adipiscing sem turpis dictumst vulputate. Semper mattis mattis pulvinar sed dolor eu.";

const comments = Array.from({ length: comments_quantity }).map((_, i) => ({
  Head: headshot,
  Text: example_text,
  Start: true,
  Like: false,
  Dislike: false,
  Comments: false
}))



export default function Comments() {
  const { data: session } = useSession()

  const [data, setData] = useState(comments)
  const handleClick = (index: number, status: string) => {
    const comments = [...data]
    if (status == 'Like') {
      if (comments[index].Like) {
        comments[index].Like = false
      } else {
        comments[index].Like = true
        comments[index].Dislike = false
      }
    } else if (status == 'Dislike') {
      if (comments[index].Dislike) {
        comments[index].Dislike = false
      } else {
        comments[index].Dislike = true
        comments[index].Like = false
      }
    }
    setData(comments)
  }

  const stars = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="flex flex-row">
      <CiStar />
    </div>
  ));

  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button className="border-2 border-slate-400 bg-background text-slate-600 rounded-3xl hover:bg-slate-200">
          Show more
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-80 fixed right-12 h-5/6 bottom-12 z-50 flex flex-col">
        <div className="w-full h-full bg-background rounded-2xl">
          <DrawerHeader className="flex flex-row h-1/12 items-end">
            <DrawerClose asChild>
              <div className="h-[10%] w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12" stroke="#133157" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4 4L12 12" stroke="#133157" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </DrawerClose>
          </DrawerHeader>
          <div className="w-full h-[70%] border-t-2 grid justify-items-center">
            <ScrollArea className="h-full w-11/12 m-2">
              {comments.map((comment, index) => (
                <div key={index} className="w-full flex flex-col">
                  <div className="w-full flex flex-row">
                    <div className="w-1/6 m-2">
                      <Image
                        src={comment.Head}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                    <div className="w-5/6 flex flex-col">
                      <div className="w-full text-xs">
                        {comment.Text}
                      </div>
                      <div className="w-full flex flex-row gap-2 mt-1">
                        <FaRegStar />
                        <div onClick={() => handleClick(index, 'Like')}>
                          {comment.Like ? <FaThumbsUp /> : <FaRegThumbsUp />}
                        </div>
                        <div onClick={() => handleClick(index, 'Dislike')}>
                          {comment.Dislike ? <FaThumbsDown /> : <FaRegThumbsDown />}
                        </div>
                        <BiComment />
                      </div>
                    </div>
                  </div>
                  <Separator className="my-1" />
                </div>
              ))}
            </ScrollArea>
          </div>
          <DrawerFooter>
            <div className="flex flex-row">
              <div className="w-2/12 h-full content-center mt-3">
                <Image
                  unoptimized
                  src={session?.user?.avatar as string}
                  alt="here was a logo:("
                  width={30}
                  height={30}
                  className="rounded-full w-8 h-8 m-1 content-center"
                />
              </div>
              <div className="flex flex-col m-2 gap-1">
                <div className="flex flex-row">
                  <>{stars}</>
                </div>
                <div className="w-full flex flex-row gap-1">
                  <Input placeholder="comment" className="w-3/4 h-2/3 text-sm border-2 border-slate-400 bg-background text-slate-600 rounded-3xl hover:bg-slate-200" />
                  <Button type="submit" className="text-xs w-1/4 h-2/3 rounded-3xl hover:bg-slate-700">Submit</Button>
                </div>
              </div>
            </div>

          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
