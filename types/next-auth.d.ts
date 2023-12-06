import NextAuth, { DefaultSession } from 'next-auth'

enum LoginType {
  CREDENTIALS = 'credentials',
  GOOGLE = 'google',
}

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id?: string
      jwtToken?: string
      avatar?: string
    } & DefaultSession['user']
  }
  interface User {
    name?: string
    email?: string

    id?: string
    jwtToken?: string
    avatar?: string
  }
  interface Account {
    user: {
      id?: string
      jwtToken?: string
      avatar?: string
    }
  }
}
