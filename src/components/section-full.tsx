import { HEADER_HEIGHT } from "@/core/config"

type Props = {
  children?: React.ReactNode
  className?: string
}

const SectionFull = (props: Props) => {
  return (
    <section
      style={{ minHeight: `calc(100svh - ${HEADER_HEIGHT}px)` }}
      {...props}
    />
  )
}

export default SectionFull
