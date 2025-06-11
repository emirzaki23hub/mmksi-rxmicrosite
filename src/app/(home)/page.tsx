import BaseFooter from "@/components/base/base-footer"
import BaseHeader from "@/components/base/base-header"
import { Separator } from "@/components/ui/separator"
import SectionCTA from "./section-cta"
import SectionForm from "./section-form"
import SectionMap from "./section-map"
import SectionPost from "./section-post"
import SectionUSP from "./section-usp"
import SectionBanner from "./section-banner"

export default function Home() {
  return (
    <>
      <BaseHeader />

      <main>
        <SectionBanner />
        <SectionUSP />
        <SectionMap />
        <SectionPost />
        <Separator className="h-[10px] bg-primary" />
        <SectionForm />
        <SectionCTA />
      </main>

      <Separator className="h-[10px] bg-primary" />

      <BaseFooter />
    </>
  )
}
