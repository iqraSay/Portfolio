"use client";
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'

export default function Home() {
  return (
    <main className=" flex-col  items-center justify-between  ">
      <Navbar />
      <HeroSection />
      {/* <div className='flex-col flex items-center justify-between'> */}
      <Footer />
      {/* </div> */}
    </main>
  
  )
}
