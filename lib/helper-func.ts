'use client'
import { useEffect, useState } from 'react'
function generateRandomString(length = 10) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
export { generateRandomString }

type UseResponsiveAnimation = (
  mobileXValues: number[],
  desktopXValues: number[],
  mobileDuration: number,
  desktopDuration: number,
) => {
  xValues: number[]
  duration: number
}

export const useResponsiveAnimation: UseResponsiveAnimation = (
  mobileXValues,
  desktopXValues,
  mobileDuration,
  desktopDuration,
) => {
  const [xValues, setXValues] = useState<number[]>(desktopXValues)
  const [duration, setDuration] = useState<number>(desktopDuration)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setXValues(mobileXValues)
        setDuration(mobileDuration)
      } else {
        setXValues(desktopXValues)
        setDuration(desktopDuration)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [mobileXValues, desktopXValues, mobileDuration, desktopDuration])

  return { xValues, duration }
}
