import SectionFull from "@/components/section-full"
import Image from "next/image"
import BackgroundImage from "~/images/background-usp.png"

const SectionUSP = () => {
  return (
    <SectionFull className="relative text-white">
      <Image
        src={BackgroundImage}
        alt="Background Image"
        fill
        className="object-cover"
      />

      <div className="relative">USP Section</div>
    </SectionFull>
  )
}

export default SectionUSP
