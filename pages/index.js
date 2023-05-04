import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head><title>Ninja List | Home</title></Head>
    <div>
      <h1>
        Home
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ut optio eligendi vel quisquam quas molestias asperiores velit necessitatibus totam cum vero aut? Quod nobis officiis unde iste error fuga.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ut optio eligendi vel quisquam quas molestias asperiores velit necessitatibus totam cum vero aut? Quod nobis officiis unde iste error fuga.</p>
      <Link href='/profiles'>See Profile Listings</Link>
    </div>
    </>
  )
}
