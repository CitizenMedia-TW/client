'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const Provider = (props: Props) => {
  return <SessionProvider>{props.children}</SessionProvider>
}

export default Provider
