'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import headshot from '@/public/notifications-head.svg'

const today = new Date()
const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

const notifications_Date = Array.from({ length: 4 }).map((_, i) => {
  const date = new Date()
  date.setDate(today.getDate() - i)
  const formattedDate = i === 0 ? 'Today' : formatter.format(date)

  const dateData = Array.from({ length: 10 }).map((_, j) => ({
    Head: headshot,
    Source: 'Another User',
    Event: 'liked your post',
    Time: '10 min ago',
    Read: false,
  }))

  return {
    Date: formattedDate,
    data: dateData,
  }
})

export default function Page() {
  const [data, setData] = useState(notifications_Date)

  const handleClick = (dateIndex: number, notificationIndex: number) => {
    const newNotifications = [...data]
    newNotifications[dateIndex].data[notificationIndex].Read = true
    setData(newNotifications)
  }

  return (
    <div className="w-full grid justify-items-center my-8">
      <div className="w-[86%] grid justify-items-end">
        <div className="w-full text-3xl font-bold text-primary">
          Notifications
        </div>
        <Separator className="my-4 h-0.5 bg-slate-400" />
        <div className="flex flex-col w-[98%] justify-items-center my-4 gap-4">
          <div className="w-full grid justify-items-end">
            {notifications_Date.map((date, dateIndex) => (
              <div key={date.Date} className="w-full">
                <div
                  key={date.Date}
                  className="w-full border-b-2 border-slate-200 text-gray-400"
                >
                  {date.Date}
                </div>
                <ScrollArea className="h-72 w-[96%] m-4 rounded-md border">
                  <div className="p-4">
                    {date.data.map((notification, index) => (
                      <div key={index}>
                        <div
                          key={index}
                          className={`w-full flex flex-rol hover:bg-slate-100 ${
                            notification.Read
                              ? ''
                              : 'border-l-8 border-slate-400 bg-slate-50'
                          }`}
                          onClick={() => handleClick(dateIndex, index)}
                        >
                          <div className="w-[7%]">
                            <Image
                              src={notification.Head}
                              alt=""
                              className="p-1"
                            />
                          </div>
                          <div className="flex flex-col grow">
                            <div className="flex flex-row gap-2">
                              <div
                                key={notification.Source}
                                className="text-lg font-bold hover:text-blue-400"
                              >
                                {notification.Source}
                              </div>
                              <div
                                key={notification.Event}
                                className="text-md font-normal mt-0.5"
                              >
                                {notification.Event}
                              </div>
                            </div>
                            <div
                              key={notification.Time}
                              className="text-md font-normal text-slate-400 hover:text-slate-600"
                            >
                              {notification.Time}
                            </div>
                          </div>
                          <div className="right-0 w-[6%]">
                            <div className="p-2 w-full h-full bg-gray-300 hover:bg-slate-300" />
                          </div>
                        </div>
                        <Separator className="my-2" />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
