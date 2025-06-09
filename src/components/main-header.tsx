import { HEADER_HEIGHT } from "@/core/config"
import Image from "next/image"
import Link from "next/link"
import Logo from "~/logo/logo-light.svg.svg"

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/",
    label: "USP",
  },
  {
    href: "/",
    label: "Form",
  },
  {
    href: "/",
    label: "Post",
  },
  {
    href: "/",
    label: "Maps",
  },
  {
    href: "/",
    label: "MMID",
  },
]

const MainHeader = () => {
  return (
    <header
      className="flex bg-black px-6 items-center"
      style={{ minHeight: HEADER_HEIGHT }}
    >
      <Image src={Logo} alt="Mitsubishi" className="w-[60px]" />

      <nav className="ml-auto px-12 flex items-center gap-12 uppercase tracking-[5px] text-sm font-medium">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="hover:text-primary text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default MainHeader
