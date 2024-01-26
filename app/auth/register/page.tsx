'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import axios from 'axios'
const API_URL = 'http://localhost:8080'

type User = {
  username: string
  email: string
  password: string
}

async function register(newUser: User) {
  const res = await axios.post(`${API_URL}/auth/register`, newUser)
  if (res.status != 200) return window.alert('Error')
  window.alert('Success')
  window.location.href = '/auth/signin'
}

export default function Page() {
  const [newUser, setNewUser] = React.useState<User>({
    username: '',
    email: '',
    password: '',
  })

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <Button onClick={() => register(newUser)}>Register</Button>
    </div>
  )
}
