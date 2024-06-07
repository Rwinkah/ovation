/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Header } from './_sections/nav'
import Partners from './_sections/partners'
import Features from './_sections/features'
import Hero from './_sections/hero'

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-between pt-24">
        <Hero />

        <div />

        <div className="container flex items-center justify-center py-20">
          <img
            src={'assets/images/dashboard-demo.png'}
            alt="dashboard demo"
            className="w-full lg:w-[900px] h-full lg:h-[600px] shadow-[0px_4px_250px_0px_#AFC76B4D]"
          />
        </div>

        <Partners />
        <Features />
      </main>
    </>
  )
}
