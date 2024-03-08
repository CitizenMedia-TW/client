'use client'
import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { UserServices } from '@/api/services'

export default function Userbar() {
  const { data: session, status } = useSession()
  const username = session?.user?.name
  const [profile, setProfile] = React.useState([])

  React.useEffect(() => {
    const getProfileLinks = async () => {
      const res = await UserServices.getProfileLinks(
        session?.user.jwtToken as string
      )
      setProfile(res.data.profileLinks)
    }
    getProfileLinks()
  }, [status, session?.user.jwtToken])

  return (
    <div>
      <section className="border-2">
        <div className="flex justify-start items-center">
          {session && (
            <Image
              unoptimized
              src={session?.user.avatar as string}
              alt="avatar"
              width="130"
              height="130"
              className="rounded-full m-3.5"
            />
          )}
          <p>User {username}</p>
        </div>
        <div className="flex">Links to profile, settings, etc.</div>
        {profile &&
          Object.entries(profile).map(([key, value]) => {
            return (
              <div key={key} className="flex flex-row">
                <p className="pr-2">{key}</p>
                <p>{value}</p>
              </div>
            )
          })}
      </section>
    </div>
  )
}
