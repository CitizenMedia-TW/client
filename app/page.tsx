import React from 'react'
import Carousel from './Carousel'
import { FiThumbsUp } from 'react-icons/fi'
import LatestNewsIcon from '@/public/latest-news.svg'
import Image from 'next/image'
import LatestNews from './LatestNews'
import RecommandedTag from './RecommandedTag'

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
        <div className="flex items-center pl-5 pt-5 pb-12">
          <Image src={LatestNewsIcon} alt="" className="h-4" />
          <p className="pl-2 font-semibold text-lg">The latest news</p>
        </div>
        <div className="flex flex-col sm:flex-row h-full">
          <div className="w-full sm:w-1/2 pr-6 pl-16">
            <LatestNews />
          </div>
          <div className="w-full sm:w-1/2 h-full flex pt-2 pl-6 pr-7">
            <div className="w-full h-full border-x border-border">
              <p className="pl-6 font-medium text-lg text-slate-400">
                Recommanded Topic
              </p>
              <div className="w-full h-64 px-12 pt-8 pb-8">
                <RecommandedTag />
              </div>
              <hr className="mx-5 h-px bg-border" />
              <div className="w-full"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <LatestNews /> */}
      {/* <MostViewed /> */}
      {/* <TraceAuthor /> */}
    </main>
  )
}
