import NextAuth, { User, NextAuthConfig } from 'next-auth'

import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import axios from 'axios'

const { NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env
const API_URL = process.env.API_URL ?? 'http://localhost:8080'

const authOptions: NextAuthConfig = {
  secret: NEXTAUTH_SECRET,
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<User | null> {
        return {
          email: credentials?.email as string,
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, credentials }) {
      if (account && account.provider === 'google') {
        const res = await axios
          .post(API_URL + '/auth/google', { id_token: account.id_token })
          .catch((err) => {
            console.log(err)
          })
        if (res && res.status === 200) {
          account.user = res.data as User
          return true
        } else return false
      } else if (account && account.provider === 'credentials') {
        const res = await axios
          .post(API_URL + '/auth/credentials', {
            email: credentials?.email,
            password: credentials?.password,
          })
          .catch((err) => {
            console.log(err)
          })
        if (res && res.status === 200) {
          account.user = res.data as User
          return true
        } else return false
      }
      return false
    },
    async session({ session, token }) {
      session.user = token.user as User
      return session
    },
    async jwt({ token, account }) {
      if (account) token.user = account.user as User
      return token
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
}

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions)
