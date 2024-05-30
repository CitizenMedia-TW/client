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
        try {
          const { data: user } = await axios.post(
            API_URL + '/auth/credentials',
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          )

          const { name, email, avatar, jwtToken } = user

          // transfer user data to jwt()
          // how to call: user
          return {
            name,
            email,
            avatar,
            jwtToken,
          }
        } catch (error) {
          console.log(error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    // first
    async signIn({ account }) {
      if (account?.provider === 'google') {
        try {
          const { data: user } = await axios.post(API_URL + '/auth/google', {
            id_token: account.id_token,
          })

          // transfer user data to jwt()
          // how to call: account.user
          account.user = user as User
        } catch (error) {
          console.log(error)
          return false
        }
      }

      return true
    },
    // second
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id
      }

      if (account) {
        if (account.provider === 'credentials') {
          // transfer jwt token and avatar to session()
          token.picture = user.avatar
          token.jwtToken = user.jwtToken
        } else if (account.provider === 'google') {
          // transfer jwt token and access token to session()
          token.jwtToken = account.user.jwtToken
          token.accessToken = account.access_token
        }
      }

      return token
    },
    // third
    async session({ session, token, user }) {
      session.user.id = token.id as string
      session.user.avatar = token.picture as string
      session.user.jwtToken = token.jwtToken as string
      session.accessToken = token.accessToken as string
      return session
    },
  },
  pages: {
    error: '/',
    signIn: '/auth/signin',
  },
}

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions)
