'use client'
import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { ImFacebook2 } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc'
import Block from '../Block'

async function credentials(data: { email: string; password: string }) {
  const result = await signIn('credentials', {
    email: data.email,
    password: data.password,
    redirect: false,
  })
  if (result?.error) {
    console.log(result.error)
    return window.alert('Please check your email and password')
  }
}

async function google() {
  await signIn('google', { redirect: true })
}

export default function Home() {
  const [cred, setCred] = useState({ email: '', password: '' })

  /* Redirect to homepage if user is logged in */
  const { data: session } = useSession()
  if (session) {
    return window.location.replace('/')
  }

  return (
    <Block title={'LOGIN'}>
      <div>
        <div className="w-full h-5/6 flex flex-col md:flex-row justify-around grow justify-items-center gap-y-2">
          <div className="md:h-full md:w-1/2 w-full flex flex-col relative md:py-14 gap-y-2 md:gap-y-6">
            <button
              type="button"
              className="relative left-1/2 md:top-[30%] -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 inline-flex items-center"
              onClick={() => google()}
            >
              <FcGoogle size={26} />
              Sign in with Google
            </button>
            <button
              type="button"
              className="relative left-1/2 md:top-[35%] -translate-x-1/2 h-14 rounded-xl border-2 border-[#0F3E7A] bg-[#0F3E7A] shrink-0 justify-center text-[#FFFFFF] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 inline-flex items-center"
              onClick={() => google()}
            >
              <ImFacebook2 size={26} color="#FFFFFF" />
              Continue with Facebook
            </button>
          </div>

          <div className="relative top-1/4 hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="368"
              viewBox="0 0 5 368"
              fill="none"
            >
              <path
                d="M2 0.314453L3 367.233"
                stroke="#6A88AD"
                strokeWidth="3.5"
              />
            </svg>
          </div>

          <div className="md:h-full md:w-1/2 w-full flex flex-col relative gap-y-5 md:py-3">
            <input
              type="email"
              className="relative left-1/2 -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 px-4"
              placeholder="E-Mail"
              onChange={(e) => setCred({ ...cred, email: e.target.value })}
            />
            <input
              type="text"
              className="relative left-1/2 -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 px-4"
              placeholder="Password"
              onChange={(e) => setCred({ ...cred, password: e.target.value })}
            />
            <button
              className="relative left-1/2 -translate-x-1/2 w-[70%] 2xl:w-48 h-12 bg-[#fbd06e] rounded-xl text-[#0F3E7A] font-sans not-italic font-normal leading-normal"
              onClick={() => credentials(cred)}
            >
              LOGIN
            </button>
            <div className="relative left-1/2 -translate-x-1/2 flex justify-center md:-translate-y-1/8">
              <Link
                href="/auth/signin/forget-password"
                className="text-[#0F3E7A] font-sans text-[16px] not-italic font-normal leading-[50px] underline"
              >
                Forget password?
              </Link>
            </div>
            <div className="relative left-1/2 -translate-x-1/2 flex justify-center md:-translate-y-1/2">
              <Link
                href="/auth/register"
                className="text-[#0F3E7A] font-sans not-italic font-normal leading-[50px] underline"
              >
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Block>
  )
}
