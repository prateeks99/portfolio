import '../styles/globals.css'
import { Geist, JetBrains_Mono } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${geist.variable} ${mono.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
