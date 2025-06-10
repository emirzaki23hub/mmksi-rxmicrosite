import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Play } from "lucide-react"
import Image from "next/image"
import DummyImage1 from "~/images/dummy-post-thumbnail-1.png"
import DummyImage2 from "~/images/dummy-post-thumbnail-2.png"

const SectionPost = () => {
  return (
    <section className="bg-black text-white pt-11 pb-20">
      <h2 className="text-[33px] text-center leading-12 font-medium">
        Temukan Kotaknya, Foto, dan Bagikan dengan Tagar #MysteryBox
      </h2>

      <div className="px-[132px]">
        <Carousel
          className="w-full mt-11 mx-auto"
          opts={{
            loop: true,
            slidesToScroll: "auto",
          }}
        >
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <div className="w-full aspect-[0.8] relative">
                  <Image
                    src={index % 2 === 0 ? DummyImage1 : DummyImage2}
                    alt={`Post Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {index % 2 === 0 && (
                    <Play
                      className="text-white z-10 absolute right-4 top-4"
                      fill="currentColor"
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default SectionPost
