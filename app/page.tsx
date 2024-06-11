'use client'
/* eslint-disable @next/next/no-img-element */
import { Header } from './_sections/nav'
import Partners from './_sections/partners'
import Features from './_sections/features'
import Hero from './_sections/hero'
import Footer from './_sections/footer'
import Extendedpartners from './_sections/extendedPartners'
import MoreFromOvation from './_sections/more'
import InfoCards from './_sections/infoCards'
import HowItWorks from './_sections/howItWorks'
import Promotion from './_sections/promotion'
import React, { useEffect, useState } from 'react'
import Preloader from './_components/preloader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return <>{isLoading ? <Preloader /> : <Application />}</>
}

function Application() {
  return (
    <React.Fragment>
      <Promotion />
      <Header />

      <main className="flex flex-col items-center justify-between pt-24">
        <Hero />
        <div className="container flex items-center justify-center py-20">
          <img
            src={'assets/images/dashboard-demo.png'}
            alt="dashboard demo"
            className="w-full lg:w-[900px] h-full lg:h-[600px] shadow-[0px_4px_250px_0px_#AFC76B4D]"
          />
        </div>
        <Partners />
        <Features />
        <InfoCards />
        <Extendedpartners />
        <HowItWorks />
        <MoreFromOvation />
      </main>
      <Footer />
    </React.Fragment>
  )
}
