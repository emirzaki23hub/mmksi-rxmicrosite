import MainHeader from "@/components/main-header"
import SectionMap from "./section-map"
import SectionUSP from "./section-usp"

export default function Home() {
  return (
    <>
      <MainHeader />

      <main>
        <SectionUSP />
        <SectionMap />
      </main>
    </>
  )
}
