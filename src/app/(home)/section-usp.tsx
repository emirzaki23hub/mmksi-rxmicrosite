"use client"
import Image from "next/image"
import BackgroundImage from "~/images/background-usp.png"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const SectionUSP = () => {
  const component = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".flyout-text", { opacity: 0, y: 50 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: "top top",
          end: "+=4500",
          scrub: 1,
        },
      })

      timeline
        .to(".flyout-text1", { opacity: 1, y: 0, duration: 0.5 })
        .to(".flyout-text2", { opacity: 1, y: 0, duration: 0.5 }, "+=0.3")
        .to(".flyout-text3", { opacity: 1, y: 0, duration: 0.5 }, "+=0.3")
        .to(".flyout-text4", { opacity: 1, y: 0, duration: 0.5 }, "+=0.3")
        .to(".flyout-text5", { opacity: 1, y: 0, duration: 0.5 }, "+=0.3")
        .to(".flyout-text6", { opacity: 0, duration: 0.5 }, "+=0.3")

    }, component)

    return () => ctx.revert()
  }, [isMobile])

  return (
    <div ref={component}>
      <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
        <section className="h-screen w-full relative">
          <Image
            src={BackgroundImage}
            alt="Background Image"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <div className="flyout-text flyout-text1 text-4xl md:text-5xl font-bold tracking-wider mb-4">
              Every Destination
            </div>
            <div className="flyout-text flyout-text2 text-4xl md:text-5xl font-bold tracking-wider mb-4">
              Deserves
            </div>
            <div className="flyout-text flyout-text3 text-4xl md:text-5xl font-bold tracking-wider mb-4">
              a Better View
            </div>
            <div className="flyout-text flyout-text4 text-4xl md:text-5xl font-bold tracking-wider mb-4">
              with <span className="text-[#EB181D]">Panoramic Sunroof</span>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}

export default SectionUSP