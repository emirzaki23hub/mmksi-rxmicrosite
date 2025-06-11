"use client"
import Image from "next/image"
import BackgroundImage from "~/images/background-usp.png"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const SectionUSP = () => {
  const component = useRef(null)
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          pin: true,
          start: "-op top",
          end: "+=5000 bottom",
          scrub: 1,
          markers: true,
        },
      })

      timeline
        .addLabel("start")
        .to(".flyout-text1", { opacity: 1 })
        .addLabel("flyout-text1")
        .to(".flyout-text2", { opacity: 1 })
        .addLabel("flyout-text2")
        .to(".flyout-text3", { opacity: 1 })
        .addLabel("flyout-text3")
        .to(".flyout-text4", { opacity: 1 })
        .addLabel("flyout-text4")
        .to(".flyout-text5", { opacity: 1 })
        .addLabel("flyout-text5")
        .to(".flyout-text6", { opacity: 0 })
        .addLabel("flyout-text6")
    }, component)

    return () => ctx.revert()
  }, [isMobile])
  return (
    <div ref={component}>
      <div className="relative" ref={ref}>
        <section className="h-[100vh] relative">
          <Image
            src={BackgroundImage}
            alt="Background Image"
            fill
            className="object-cover"
          />

          <div className="text flyout-text flyout-text1 text-[40px] leading-12 tracking-[10px]">
            Every Destination
          </div>
          <div className="text flyout-text flyout-text2 text-[40px] leading-12 tracking-[10px]">
            Deserves
          </div>
          <div className="text flyout-text flyout-text3 text-[40px] leading-12 tracking-[10px]">
            a Better View
          </div>
          <div className="text flyout-text flyout-text4 text-[40px] leading-12 tracking-[10px]">
            with{" "}
            <span className="text-[#EB181D] font-bold">
              Panoramic Sunroof
            </span>{" "}
          </div>
          <div className="text flyout-text flyout-text5 paragraph-2"></div>

          <div className="relative">USP Section</div>
        </section>
      </div>
    </div>
  )
}

export default SectionUSP
