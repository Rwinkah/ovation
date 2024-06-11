import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const style = {
  width: 350,
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0.7,
  margin: 8,
  borderRadius: 500,
  background: '#C1FE17',
}

const variants = {
  start: {
    scale: 0.2,
    rotate: 0,
  },
  end: {
    scale: 1,
    rotate: 360,
  },
}

export default function Loader() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <motion.div
        style={style}
        variants={variants}
        initial={'start'}
        animate={'end'}
        transition={{
          repeatType: 'reverse',
          ease: 'anticipate',
          duration: 2,
          delay: 0,
        }}
      >
        <Image
          src="/assets/images/logo/logo.png"
          width={300}
          height={100}
          alt="logo"
        />
      </motion.div>
    </div>
  )
}
