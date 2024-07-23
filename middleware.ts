import { withAuth } from 'next-auth/middleware'

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    type Token = { user: { refreshToken: string }; exp: number }
    const token = req.nextauth.token as Token | null

    if (!token) {
      return
    }

    console.log(token)

    const {
      user: { refreshToken },
      exp,
    } = token
    const currTime = Math.floor(Date.now() / 1000)

    if (currTime > exp) {
      // TODO: refresh here
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return true
      },
    },
  }
)
