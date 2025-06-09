import MainHeader from "@/components/main-header"
import { Separator } from "@/components/ui/separator"
import SectionMap from "./section-map"
import SectionPost from "./section-post"
import SectionUSP from "./section-usp"

export default function Home() {
  return (
    <>
      <MainHeader />

      <main>
        <SectionUSP />
        <SectionMap />
        <SectionPost />
        <Separator className="h-[10px] bg-primary"/>
      </main>
    </>
  )
}
