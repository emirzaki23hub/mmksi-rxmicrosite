import { cn } from "@/lib/tailwind"

type Props = {
  children?: React.ReactNode
  className?: string
  centered?: boolean
}

const SectionTitle = ({ className, centered, ...props }: Props) => {
  return (
    <h2
      className={cn(
        "text-[38px] leading-12 font-medium",
        centered && "text-center",
        className,
      )}
      {...props}
    />
  )
}

export default SectionTitle
