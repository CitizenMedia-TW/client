import React from 'react'
import { ThumbsUp, MessageSquare } from 'lucide-react'

// import LatestNewsIcon from '@/public/latest-news.svg'
// import Image from 'next/image'

import { LatestNews, MainCarousel } from './components/homepage'

export default function Home() {
  return (
    <main className="min-h-lvh flex flex-col items-center py-8">
      <article className="flex flex-col w-full gap-y-8">
        <section className="flex items-center gap-x-2 px-8">
          <ThumbsUp />
          <h2 className="text-2xl font-bold">Official Recommendation</h2>
        </section>

        <MainCarousel />
      </article>

      <article className="w-full flex flex-col py-4 lg:p-16 gap-y-2 lg:gap-y-8 shadow-blue">
        <section className="flex items-center gap-x-2 px-2 lg:px-0">
          <MessageSquare />
          <h2 className="text-2xl font-bold">The Latest News</h2>
        </section>

        <LatestNews />
      </article>
      {/* <LatestNews /> */}
      {/* <MostViewed /> */}
      {/* <TraceAuthor /> */}
    </main>
  )
}
