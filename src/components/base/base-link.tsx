import { cn } from "@/lib/tailwind"
import Link, { LinkProps } from "next/link"
import { ButtonProps, buttonVariants } from "../ui/button"

type Props = {
  href: LinkProps["href"]
  external?: boolean
  children?: React.ReactNode
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
  className?: string
}

const BaseLink = ({ external, variant, size, className, ...props }: Props) => {
  return (
    <Link
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(variant && buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export default BaseLink
