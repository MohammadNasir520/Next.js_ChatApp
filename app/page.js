import Image from 'next/image'
import { Inter } from 'next/font/google'
import LandingPage from './pages/Home/LandingPage'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <LandingPage />
    </div>
  )
}
