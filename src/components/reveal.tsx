"use client"

import { useUncontrolled } from "@/hooks/use-uncontrolled"
import { Root as SlotRoot } from "@radix-ui/react-slot"
import { useRef } from "react"

type Props = {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
  reveal?: boolean
  onReveal?: (value: boolean) => void
}

const Reveal = ({ trigger, children, className, reveal, onReveal }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [_value, handleChange] = useUncontrolled({
    value: reveal,
    defaultValue: false,
    onChange: onReveal,
  })

  return (
    <div ref={containerRef} className={className}>
      {!_value ? (
        <SlotRoot onClick={() => handleChange(true)}>{trigger}</SlotRoot>
      ) : (
        <div>{children}</div>
      )}
    </div>
  )
}

export default Reveal
