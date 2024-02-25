'use client'
import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'

type SubPagesType = {
  [key: string]: {}
}
const subPages: SubPagesType = {
  Account: {},
  Security: {},
  Notification: {},
  Workspace: {},
}

export default function Manu({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const dir: string = '/settings/'

  return (
    <main className="relative h-screen px-[6.5%] pt-[7%]">
      <p className="text-5xl font-bold">Settings</p>
      {/* Show on @media (min-width: 640px) */}
      <section className="relative top-[5.5%] left-[2%] flex space-x-6 transition-transform duration-100">
        {Object.keys(subPages).map((key) => (
          <Link
            href={`${dir}${
              key.toString().charAt(0).toLowerCase() + key.toString().slice(1)
            }`}
            className={`relative ${
              key === title
                ? 'font-semibold text-2xl -top-2 -left-1'
                : 'text-xl font-extralight'
            }`}
          >
            {key}
          </Link>
        ))}
      </section>
      <hr className="h-[3px] bg-primary mt-[4%]" />
      <section className="h-full w-full">{children}</section>
    </main>
  )
}
