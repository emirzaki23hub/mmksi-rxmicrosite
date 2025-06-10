import BaseLink from "@/components/base/base-link"
import Image from "next/image"
import BannerCTA from "~/images/banner-cta.png"
import SectionTitle from "./section-title"

const SectionCTA = () => {
  return (
    <>
      <div className="relative min-h-[548px]">
        <Image
          src={BannerCTA}
          alt="Banner CTA"
          layout="fill"
          className="object-cover"
        />
      </div>

      <section className="max-w-[1200px] mx-auto w-full flex gap-20 items-center px-4">
        <div className="grow py-14">
          <SectionTitle>Grand Destination Mission</SectionTitle>

          <p className="mt-6 text-lg text-anthracite-grey leading-8">
            Merupakan aplikasi resmi yang menghadirkan kemudahan dalam mengakses
            layanan dan menjadi sumber informasi terbaik seputar kendaraan
            Mitsubishi Motors Anda. Dengan semangat #ConnectingYourAdventure,
            aplikasi ini dilengkapi berbagai fitur unggulan yang siap menjadi
            asisten pribadi untuk menghubungkan Anda dengan berbagai
            petualangan.
          </p>
        </div>
        <div className="shrink-0">
          <BaseLink href="/" external variant="default" className="w-[332px]">
            Selengkapnya
          </BaseLink>
        </div>
      </section>
    </>
  )
}

export default SectionCTA
