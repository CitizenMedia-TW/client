'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Block from '../Block'

/* import Services from '../api/services' */

const API_URL = 'http://localhost:8080'

interface params {
  id: string
  token: string
  pass: string
  confirm: string
}

async function resetPass({ id, token, pass, confirm }: params) {
  if (pass !== confirm) {
    window.alert('passwords do not match')
  } else {
    /* await Services.resetPass(id, token, pass) */
    const res = await axios.post(`${API_URL}/auth/reset-password`, {
      id: id,
      password: pass,
      token: token,
    })
    if (res.status === 200) {
      window.alert(res.data.message)
      return window.location.replace('/auth/signin')
    } else {
      window.alert(res.data.message)
    }
  }
}

export default function Home() {
  const query = useSearchParams()
  const id = query.get('id') ?? ''
  const token = query.get('token') ?? ''

  const [pass, setPass] = useState('')
  const [confirm, setConfirm] = useState('')

  /* Redirect to homepage if user is logged in */
  const { data: session } = useSession()
  if (session) return window.location.replace('/')

  return (
    <Block title={'Reset Password'}>
      <div className="flex justify-center">
        <div className="md:h-full md:w-1/2 w-full flex flex-col relative gap-y-2 md:gap-y-5 md:py-3">
          <input
            type="text"
            className="relative left-1/2 -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 px-4"
            placeholder="E-mail"
            onChange={(e) => setPass(e.target.value)}
          />
          <input
            type="text"
            className="relative left-1/2 -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 px-4"
            placeholder="new password"
            onChange={(e) => setPass(e.target.value)}
          />
          <input
            type="text"
            className="relative left-1/2 -translate-x-1/2 h-14 rounded-xl border-2 border-[#5778a2] bg-white shrink-0 justify-center text-[#9E9E9E] font-sans not-italic font-medium leading-normal w-[70%] 2xl:w-96 px-4"
            placeholder="confirm password"
            onChange={(e) => setConfirm(e.target.value)}
          />
          <button
            className="relative left-1/2 -translate-x-1/2 w-[70%] 2xl:w-48 h-12 bg-[#fbd06e] rounded-xl text-[#0F3E7A] font-sans not-italic font-normal leading-normal"
            onClick={() => resetPass({ id, token, pass, confirm })}
          >
            Confirm
          </button>
        </div>
      </div>
    </Block>
  )
}
