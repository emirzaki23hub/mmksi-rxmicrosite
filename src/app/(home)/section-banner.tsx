import BaseSection from "@/components/base/base-section"
import CountdownTimer from "@/components/countdown-timer"
import Image from "next/image"
import BackgroundImage from "~/images/background-section.png"

const SectionBanner = () => {
  const targetDate = "2025-07-15T10:00:00"

  return (
    <BaseSection fullHeight className="relative text-white">
      <Image
        src={BackgroundImage}
        alt="Background Image"
        fill
        className="object-cover"
      />

      <CountdownTimer targetDate={targetDate} />
    </BaseSection>
  )
}

export default SectionBanner
