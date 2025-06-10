import { HEADER_HEIGHT } from "@/core/config"

type Props = {
  children?: React.ReactNode
  className?: string
  fullHeight?: boolean
}

const BaseSection = ({ fullHeight, ...props }: Props) => {
  return (
    <section
      style={
        fullHeight ? { minHeight: `calc(100svh - ${HEADER_HEIGHT}px)` } : {}
      }
      {...props}
    />
  )
}

export default BaseSection
