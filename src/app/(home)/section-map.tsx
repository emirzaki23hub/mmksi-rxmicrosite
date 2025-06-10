import Image from "next/image"
import BackgroundMap from "~/images/background-map.png"

import SectionMapMarker, { MapMarkerProps } from "./section-map-marker"

const MARKERS: MapMarkerProps[] = [
  {
    name: "Gelora Bung Karno (GBK)",
    top: 73.93,
    left: 29.09,
    date: "2025-06-18",
    address:
      "Merdeka Square, Jakarta, Jalan Lapangan Monas, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110",
    link: "https://www.google.com/maps?q=Gelora+Bung+Karno+(GBK)",
  },
]

const SectionMap = () => {
  return (
    <section className="flex min-h-[652px]">
      <div className="max-w-[585px] w-full px-[60px] py-[100px] shrink-0 bg-black text-cold-gray text-lg leading-8">
        <h2 className="text-[38px] leading-12 font-medium text-white">
          Temukan lokasi box terdekatmu!
        </h2>

        <p className="mt-8">
          Terdapat 5 titik lokasi #BLACKBOX yang dapat kamu temui. Foto dan
          bagikan selfie kamu dengan mengetik #BLACKBOX
        </p>

        <p className="mt-8 font-bold">Titik Lokasi Mystery Box</p>
        <ul>
          <li>- Lokasi 1</li>
          <li>- Lokasi 2</li>
          <li>- Lokasi 3</li>
        </ul>
      </div>

      <div className="relative grow overflow-hidden">
        <Image
          src={BackgroundMap}
          alt="Map Background"
          fill
          className="object-cover"
        />

        {MARKERS.map((marker) => (
          <SectionMapMarker key={marker.name} {...marker} />
        ))}
      </div>
    </section>
  )
}

export default SectionMap
