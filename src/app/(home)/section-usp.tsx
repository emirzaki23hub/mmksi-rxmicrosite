import BaseSection from "@/components/base/base-section"
import Image from "next/image"
import BackgroundImage from "~/images/background-usp.png"

const SectionUSP = () => {
  return (
    <BaseSection fullHeight className="relative text-white">
      <Image
        src={BackgroundImage}
        alt="Background Image"
        fill
        className="object-cover"
      />

      <div className="relative">USP Section</div>
    </BaseSection>
  )
}

export default SectionUSP
