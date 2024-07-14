import React from 'react'

import { Card, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const LatestNewsCardsSkeleton = () => {
  return (
    <section className="w-full md:w-1/2 p-4">
      <ul className="space-y-12 md:space-y-8">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <Card
              key={`card-skeleton-${index}`}
              className="h-96 lg:h-48 grid grid-cols-1 lg:grid-cols-2 grid-rows-5 lg:grid-rows-1 justify-between p-2 gap-4 bg-white bg-opacity-50 rounded-md"
            >
              <CardHeader className="row-span-2 h-fit flex flex-col gap-x-2 gap-y-4 p-2 justify-between">
                <article className="grid gap-y-2">
                  <section className="flex items-center gap-x-2">
                    <Skeleton className="size-8 rounded-full" />

                    <Skeleton className="w-24 h-fit">
                      <div className="invisible">invisible</div>
                    </Skeleton>

                    <Skeleton className="w-24 h-8 block lg:hidden ml-auto" />
                  </section>

                  <Skeleton className="w-full h-fit text-transparent text-xl font-bold">
                    <div className="invisible">invisible</div>
                    <div className="invisible">invisible</div>
                    <div className="invisible">invisible</div>
                  </Skeleton>
                </article>

                <Skeleton className="w-24 h-fit hidden lg:block text-xs">
                  <div className="invisible">invisible</div>
                </Skeleton>
              </CardHeader>

              <Skeleton className="row-span-3 size-full ml-auto rounded-2xl" />
            </Card>
          )
        })}
      </ul>
    </section>
  )
}

export default LatestNewsCardsSkeleton
