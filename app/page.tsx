import React from 'react'
import Carousel from './Carousel'
import { FiThumbsUp } from 'react-icons/fi'
import LatestNewsIcon from '@/public/latest-news.svg'
import Image from 'next/image'
import LatestNews from './LatestNews'

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full">
      <section className="flex flex-col pb-1">
        <div className="flex flex-row h-12 items-center pl-4">
          <FiThumbsUp />
          <p className="pl-2 font-semibold text-lg">Official Recommendation</p>
        </div>
        <div className="w-full h-60">
          <Carousel />
        </div>
      </section>
      <hr className="h-px bg-border w-full" />
      <section className="flex flex-col w-full h-full">
        <div className="flex items-center pl-5 pt-5 sm:pb-12">
          <Image src={LatestNewsIcon} alt="" className="h-4" />
          <p className="pl-2 font-semibold text-lg">The latest news</p>
        </div>
        <div className="flex flex-col sm:flex-row h-full">
          <LatestNews />
        </div>
      </section>
      {/* <LatestNews /> */}
      {/* <MostViewed /> */}
      {/* <TraceAuthor /> */}
    </main>
  )
}
