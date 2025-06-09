"use client"

import IconMarker from "@/components/icons/IconMarker"
import Image from "next/image"
import MyteryBox from "~/images/mystery-box.png"

import BaseLink from "@/components/base/base-link"
import Reveal from "@/components/reveal"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { dateFormat } from "@/lib/date"
import { cn } from "@/lib/tailwind"
import { X } from "lucide-react"
import { useState } from "react"

export type MapMarkerProps = {
  name: string
  top: number
  left: number
  date: string
  address: string
  link: string
}

const SectionMapMarker = ({
  name,
  top,
  left,
  date,
  address,
  link,
}: MapMarkerProps) => {
  const [reveal, setReveal] = useState(false)

  return (
    <div
      key={name}
      className="absolute z-[51]"
      style={{
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <Popover onOpenChange={(open) => open && setReveal(false)}>
        <PopoverTrigger>
          <IconMarker className="text-primary" />
        </PopoverTrigger>
        <PopoverContent
          side="top"
          sideOffset={reveal ? -15 : -5}
          className={cn(
            "relative p-4 border-0 rounded-none text-center w-[312px]",
            reveal && "w-[412px]",
          )}
        >
          <div
            className={cn(
              "w-[146px] aspect-[2.43] relative mx-auto mb-3 -mt-11",
              reveal && "w-[287px] -mt-15",
            )}
          >
            <Image
              src={MyteryBox}
              alt="Mystery Box"
              fill
              className="object-contain"
            />
          </div>
          {reveal && (
            <Button
              variant="link"
              size="icon"
              className="absolute top-0 right-0"
              onClick={() => setReveal(false)}
            >
              <X />
            </Button>
          )}

          <h3 className="font-medium text-2xl">{name}</h3>

          <Reveal
            trigger={
              <Button variant="link" className="font-bold -mt-3" size="sm">
                Lihat Detail
              </Button>
            }
            className="text-sm mt-3"
            reveal={reveal}
            onReveal={setReveal}
          >
            <p className="flex gap-4 justify-center">
              {dateFormat(date, "dd MMMM yyyy")}{" "}
              <span className="text-anthracite-grey">|</span>
              09.00 - 21.00
            </p>

            <p className="text-anthracite-grey mt-3 leading-6">{address}</p>

            <BaseLink
              external
              href={link}
              variant="default"
              className="mt-10 mb-8"
            >
              Menuju Lokasi
            </BaseLink>
          </Reveal>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default SectionMapMarker
