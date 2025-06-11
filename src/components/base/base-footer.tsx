import { cn } from "@/lib/tailwind"
import Image, { ImageProps } from "next/image"
import IconEnvelope from "~/icons/icon-envelope.svg"
import IconFacebook from "~/icons/icon-facebook.svg"
import IconInstagram from "~/icons/icon-instagram.svg"
import IconTikTok from "~/icons/icon-tiktok.svg"
import IconTwitter from "~/icons/icon-twitter.svg"
import IconYoutube from "~/icons/icon-youtube.svg"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Separator } from "../ui/separator"
import BaseFooterNewsletter from "./base-footer-newsletter"
import BaseLink from "./base-link"

type SectionTitleProps = {
  children?: React.ReactNode
  className?: string
}

const SectionTitle = ({ className, ...props }: SectionTitleProps) => (
  <h3
    className={cn("text-white font-bold text-xl leading-7", className)}
    {...props}
  />
)

export const LINKS: {
  category: string
  items: {
    title: string
    href: string
  }[]
}[] = [
  {
    category: "Perusahaan",
    items: [
      { title: "Profil Perusahaan", href: "/perusahaan/profil" },
      { title: "Sejarah Perusahaan", href: "/perusahaan/sejarah" },
      { title: "Nilai Perusahaan", href: "/perusahaan/nilai" },
      { title: "Grup Usaha Terkait", href: "/perusahaan/grup-usaha" },
      {
        title: "Kebijakan Mutu Lingkungan",
        href: "/perusahaan/kebijakan-mutu-lingkungan",
      },
      {
        title: "Tanggung Jawab Sosial",
        href: "/perusahaan/tanggung-jawab-sosial",
      },
      { title: "Karir", href: "/perusahaan/karir" },
    ],
  },
  {
    category: "Model",
    items: [
      { title: "Xforce", href: "/model/xforce" },
      { title: "New Pajero Sport", href: "/model/new-pajero-sport" },
      {
        title: "New Pajero Sport Elite LE",
        href: "/model/new-pajero-sport-elite-le",
      },
      {
        title: "Xpander Cross Elite LE",
        href: "/model/xpander-cross-elite-le",
      },
      { title: "Xpander Cross", href: "/model/xpander-cross" },
      { title: "Xpander", href: "/model/xpander" },
      { title: "All New Triton", href: "/model/all-new-triton" },
      { title: "L100EV", href: "/model/l100ev" },
      { title: "L300", href: "/model/l300" },
    ],
  },
  {
    category: "Purna Jual",
    items: [
      { title: "Layanan Kami", href: "/purna-jual/layanan-kami" },
      { title: "Perawatan Kendaraan", href: "/purna-jual/perawatan-kendaraan" },
      { title: "Suku Cadang", href: "/purna-jual/suku-cadang" },
      { title: "Aksesoris", href: "/purna-jual/aksesoris" },
      { title: "Layanan Bodi & Cat", href: "/purna-jual/layanan-bodi-cat" },
      {
        title: "My Mitsubishi Motors ID",
        href: "/purna-jual/my-mitsubishi-motors-id",
      },
      {
        title: "Mitsubishi Connect ID",
        href: "/purna-jual/mitsubishi-connect-id",
      },
    ],
  },
  {
    category: "Kepemilikan",
    items: [
      { title: "Kepemilikan Kendaraan", href: "/kepemilikan/kendaraan" },
      {
        title: "Program Aktivasi Garansi",
        href: "/kepemilikan/aktivasi-garansi",
      },
      { title: "Panduan Pengguna", href: "/kepemilikan/panduan-pengguna" },
      { title: "Panduan Servis Pengguna", href: "/kepemilikan/panduan-servis" },
      { title: "Kampanye Perbaikan", href: "/kepemilikan/kampanye-perbaikan" },
    ],
  },
  {
    category: "Shopping Tools",
    items: [
      { title: "Cari Dealer", href: "/shopping-tools/cari-dealer" },
      { title: "Unduh Brosur", href: "/shopping-tools/unduh-brosur" },
      { title: "Test Drive", href: "/shopping-tools/test-drive" },
      { title: "Simulasi Kredit", href: "/shopping-tools/simulasi-kredit" },
      {
        title: "Konsultasi Pembelian",
        href: "/shopping-tools/konsultasi-pembelian",
      },
    ],
  },
  {
    category: "Bantuan",
    items: [
      { title: "Layanan Fleet", href: "/bantuan/layanan-fleet" },
      { title: "Hubungi Kami", href: "/bantuan/hubungi-kami" },
      { title: "MIRA", href: "/bantuan/mira" },
    ],
  },
]

export const OTHER_LINKS: {
  title: string
  href: string
}[] = [
  {
    title: "Kebijakan Privasi",
    href: "/kebijakan-privasi",
  },
  {
    title: "Syarat & Ketentuan",
    href: "/syarat-ketentuan",
  },
  {
    title: "Perlindungan Data Pribadi",
    href: "/perlindungan-data-pribadi",
  },
  {
    title: "Pengaturan Cookie",
    href: "/pengaturan-cookie",
  },
]

export const SOCIAL_LINKS: {
  icon: ImageProps["src"]
  href: string
}[] = [
  {
    icon: IconFacebook,
    href: "https://www.facebook.com/MitsubishiMotorsIndonesia",
  },
  {
    icon: IconTwitter,
    href: "https://x.com/Mitsubishi_ID",
  },
  {
    icon: IconInstagram,
    href: "https://www.instagram.com/mitsubishimotorsid/",
  },
  {
    icon: IconTikTok,
    href: "https://www.tiktok.com/@mitsubishimotorsid",
  },
  {
    icon: IconYoutube,
    href: "https://www.youtube.com/user/KTBMitsubishiID",
  },
  {
    icon: IconEnvelope,
    href: "/contact-us/pesan",
  },
]

const BaseFooter = () => {
  return (
    <footer className="bg-black">
      <div className="md:px-20 px-5 py-10 md:py-14 flex max-md:flex-col gap-5">
        {/* Desktop */}
        <section className="grid grid-cols-2 lg:grid-cols-3 grow gap-x-5 gap-y-14 max-md:hidden">
          {LINKS.map((linkGroup) => (
            <div key={linkGroup.category} className="flex flex-col">
              <SectionTitle>{linkGroup.category}</SectionTitle>
              <ul className="text-white/60 text-sm mt-6 space-y-5">
                {linkGroup.items.map((item) => (
                  <li key={item.title}>
                    <BaseLink href={item.href} className="hover:text-white">
                      {item.title}
                    </BaseLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Mobile */}
        <Accordion type="multiple" className="lg:hidden">
          {LINKS.map((linkGroup) => (
            <AccordionItem
              key={linkGroup.category}
              value={linkGroup.category}
              className="border-0"
            >
              <AccordionTrigger className="group hover:text-primary text-white hover:no-underline">
                <SectionTitle className="group-hover:text-primary">
                  {linkGroup.category}
                </SectionTitle>
              </AccordionTrigger>
              <AccordionContent className="text-white/60 text-sm mt-4 space-y-5">
                {linkGroup.items.map((item) => (
                  <li key={item.title}>
                    <BaseLink href={item.href} className="hover:text-white">
                      {item.title}
                    </BaseLink>
                  </li>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <section className="md:max-w-[304px] w-full shrink-0 space-y-6 flex flex-col max-md:mt-10">
          <SectionTitle>
            Dapatkan Informasi Terbaru Dari Mitsubishi Motors Indonesia
          </SectionTitle>
          <BaseFooterNewsletter />

          <div className="md:mt-auto flex gap-6 mt-10">
            {SOCIAL_LINKS.map((item) => (
              <BaseLink
                key={item.href}
                href={item.href}
                external
                className="hover:opacity-60"
              >
                <Image src={item.icon} alt="" className="size-5 md:size-8" />
              </BaseLink>
            ))}
          </div>
        </section>
      </div>

      <Separator className="opacity-40" />

      <section className="min-h-16 text-white/60 flex items-center gap-x-8 gap-y-4 px-5 md:px-16 text-sm flex-wrap max-md:py-5">
        {OTHER_LINKS.map((item) => (
          <BaseLink
            key={item.title}
            href={item.href}
            className="hover:text-white"
          >
            {item.title}
          </BaseLink>
        ))}

        <span className="ml-auto max-md:w-full max-md:mt-4 leading-6">
          ©️ 2024. PT Mitsubishi Motors Krama Yudha Sales Indonesia
        </span>
      </section>
    </footer>
  )
}

export default BaseFooter
