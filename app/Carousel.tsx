'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaRegBookmark } from 'react-icons/fa6'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function carousel() {
  const useRWD = () => {
    const [device, setDevice] = useState('mobile')

    const handleRWD = () => {
      if (window.innerWidth > 768) setDevice('PC')
      else if (window.innerWidth > 576) setDevice('tablet')
      else setDevice('mobile')
    }

    useEffect(() => {
      window.addEventListener('resize', handleRWD)
      handleRWD()
      return () => {
        window.removeEventListener('resize', handleRWD)
      }
    }, [])

    return device
  }
  const device = useRWD()
  if (device == 'PC' || device == 'tablet') {
    return (
      <div className="bg-footer">
        <Carousel className="flex items-center w-full h-[250px]">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-[600px]">
                <Card className="h-[185px] bg-slate-400 border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="font-semibold text-xl line-clamp-1 text-ellipsis">
                        Guodong (Trou) Zhao in Bootcamp
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-left font-bold text-xl line-clamp-2 text-ellipsis -mt-2">
                      A step-by-step guild to building a chatbot based on your
                      own document with GPT
                    </p>
                    <div className="flex flex-row py-3">
                      <div className="w-[87.5%] flex items-center space-x-1">
                        <AiOutlineClockCircle />
                        <div className="">Mar 11.6 min read </div>
                      </div>
                      <div className="w-[12.5%] flex items-center">
                        <FaRegBookmark className="text-footer text-2xl" />
                        <AiOutlineHeart className="text-footer text-3xl" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-yellow-500" />
          <CarouselNext className="bg-yellow-500" />
        </Carousel>
      </div>
    )
  } else {
    return (
      <div className="bg-footer">
        <Carousel className="flex items-center w-full h-[250px]">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-[300px]">
                <Card className="h-[185px] bg-slate-400 border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="font-semibold text-xl line-clamp-2 text-ellipsis">
                        Guodong (Trou) Zhao in Bootcamp
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-left font-bold text-xl line-clamp-2 text-ellipsis -mt-3">
                      A step-by-step guild to building a chatbot based on your
                      own document with GPT
                    </p>
                    <div className="flex flex-row py-2">
                      <div className="w-[75%] flex items-center space-x-1">
                        <AiOutlineClockCircle />
                        <div className="">Mar 11.6 min read </div>
                      </div>
                      <div className="w-[25%] flex items-center">
                        <FaRegBookmark className="text-footer text-2xl" />
                        <AiOutlineHeart className="text-footer text-3xl" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-yellow-500 ml-12" />
          <CarouselNext className="bg-yellow-500 mr-12" />
        </Carousel>
      </div>
    )
  }
}
