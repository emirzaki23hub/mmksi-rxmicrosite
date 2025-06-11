"use client"
import Image from "next/image"
import React, { useState, useEffect, JSX } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }))

  useEffect(() => {
    if (!isClient) return
    
    setTimeLeft(calculateTimeLeft())
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [isClient, targetDate])

  const timerComponents: JSX.Element[] = []

  const labels: { [key: string]: string } = {
    days: "Hari",
    hours: "Jam",
    minutes: "Menit",
    seconds: "Detik",
  }

  Object.keys(timeLeft).forEach((interval) => {
    const value =
      timeLeft[interval as keyof TimeLeft] < 10
        ? "0" + timeLeft[interval as keyof TimeLeft]
        : timeLeft[interval as keyof TimeLeft]

    timerComponents.push(
      <div
        key={interval}
        className="flex flex-col mt-[33%] items-center mx-2 sm:mx-4"
      >
        <div className="bg-gradient-to-b outline outline-[#636363] relative sm:text-[90px] from-[#939393] font-kosugi to-[#101010] to-50% text-white  flex justify-center items-center rounded-lg shadow-lg aspect-[140/120] w-[140px]  text-center">
          <div className="absolute top-1/2 insetx-x-0">
            <Image
              src={"/images/seperator.svg"}
              className="h-full w-full"
              width={0}
              height={0}
              alt=""
            />
          </div>
          <span className="mt-0.5">{value}</span>
        </div>
        <span className="mt-2 text-2xl leading-12  font-bold text-[#ED0000]">
          {labels[interval]}
        </span>
      </div>,
    )
  })

  if (!isClient) {
    return <div className="flex h-full absolute inset-x-5 justify-center items-center py-4 sm:py-8" />
  }

  return (
    <div className="flex h-full absolute inset-x-5 justify-center items-center py-4 sm:py-8">
      {timerComponents.length ? timerComponents : <></>}
    </div>
  )
}

export default CountdownTimer