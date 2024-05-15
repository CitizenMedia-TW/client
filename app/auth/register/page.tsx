'use client'
import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import Block from '../Block'
const API_URL = 'http://localhost:8080'

type User = {
  name: string
  mail: string
  pass: string
}

async function register(newUser: User) {
  const res = await axios.post(`${API_URL}/auth/register`, newUser)
  if (res.status != 200) return window.alert('Error')
  window.alert('Success')
  window.location.href = '/auth/signin'
}

export default function Page() {
  const [newUser, setNewUser] = React.useState<User>({
    name: '',
    mail: '',
    pass: '',
  })
  return (
    <Block title={'Register'}>
      <div className="flex justify-center">
        <div className="md:h-full md:w-1/2 w-full flex flex-col relative gap-y-2 md:gap-y-5">
          <input
            type="text"
            className="relative left-1/2 -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 px-4"
            placeholder="username"
            onChange={(e) =>
              setNewUser({ ...newUser, name: e.target.value })
            }
          />
          <input
            type="text"
            className="relative left-1/2 -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 px-4"
            placeholder="email"
            onChange={(e) => setNewUser({ ...newUser, mail: e.target.value })}
          />
          <input
            type="text"
            className="relative left-1/2 -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 px-4"
            placeholder="password"
            onChange={(e) => setNewUser({ ...newUser, pass: e.target.value })}
          />
          <button
            className="relative left-1/2 -translate-x-1/2 w-[70%] 2xl:w-48 h-12 bg-[#fbd06e] rounded-xl text-[#0F3E7A] font-sans not-italic font-normal leading-normal"
            onClick={() => register(newUser)}
          >
            Register
          </button>
          <div className="text-[#0F3E7A] relative left-1/2 -translate-x-1/2 flex justify-center translate-y-2 md:-translate-y-1/8 pb-8">
            Have an account?&nbsp;&nbsp;
            <Link
              href="/auth/signin"
              className="font-sans not-italic underline"
            >
              Signin
            </Link>
          </div>
        </div>
      </div>
    </Block>
  )
}
