import React from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Avatar } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

const MainCarouselSkeleton = () => {
  return (
    <Carousel className="group bg-footer py-8 px-8 lg:px-16 items-center">
      <CarouselContent className="cursor-grab active:cursor-grabbing">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <CarouselItem
              key={`carousel-skeleton-${index}`}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-64 bg-slate-400 border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Skeleton className="size-fit rounded-full">
                      <Avatar />
                    </Skeleton>

                    <Skeleton className="size-fit line-clamp-1">
                      <div className="invisible">invisible</div>
                    </Skeleton>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <Skeleton className="text-xl line-clamp-2 xs:line-clamp-3">
                    <div className="invisible">invisible</div>
                    <div className="invisible">invisible</div>
                    <div className="invisible">invisible</div>
                  </Skeleton>
                </CardContent>

                <CardFooter className="flex flex-col-reverse xs:flex-row justify-between gap-y-4 py-2">
                  <section className="flex items-center gap-x-2">
                    <Skeleton className="size-6 rounded-full" />
                    <Skeleton>
                      <div className="invisible">Mon Jan 1 1970</div>
                    </Skeleton>
                  </section>

                  <section className="flex items-center gap-x-4">
                    <Skeleton className="size-6" />
                    <Skeleton className="size-6" />
                  </section>
                </CardFooter>
              </Card>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

export default MainCarouselSkeleton
