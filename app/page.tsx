import React from 'react'
import Carousel from './Carousel'
import { FiThumbsUp } from 'react-icons/fi'
import LatestNewsIcon from '@/public/latest-news.svg'
import Image from 'next/image'
import LatestNews from './LatestNews'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <div className="flex flex-col w-full p-2">
        <div className="flex flex-row items-center">
          <FiThumbsUp />
          <p className="pl-2">Official Recommendation</p>
        </div>
        <Carousel />
      </div>
      <div className="flex flex-col w-full shadow-blue">
        <div className="flex flex-row items-center mx-5 my-2">
          <Image src={LatestNewsIcon} alt="" className="h-4" />
          <p className="pl-2">The latest news</p>
        </div>
        <section className="w-full">
          <LatestNews />
        </section>
      </div>
      {/* <LatestNews /> */}
      {/* <MostViewed /> */}
      {/* <TraceAuthor /> */}
    </main>
  )
}
