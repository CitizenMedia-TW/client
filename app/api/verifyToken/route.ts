import { NextRequest, NextResponse } from 'next/server'
import grpcClient from '@/lib/grpcClient'

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json({ error: 'no token' }, { status: 403 })
    }

    const response = await new Promise((resolve, reject) => {
      grpcClient.VerifyToken({ token }, (error: any, response: any) => {
        if (error) {
          return reject(error)
        }
        resolve(response)
      })
    })

    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
