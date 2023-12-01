import type { Metadata } from 'next'
/* import { Inter } from 'next/font/google' */
import './globals.css'

import Footer from './components/Footer'
import Providers from './components/Providers'
import Topbar from './components/Topbar'
import ThemeProvider from './components/ThemeProvider'

/* const inter = Inter({ subsets: ['latin'] }) */

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // suppressHydrationWarning -> suppress next-theme warning
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen relative">
        <ThemeProvider>
          <Providers>
            <Topbar />
            <div className="min-h-[calc(100%-80px)]">{children}</div>
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
