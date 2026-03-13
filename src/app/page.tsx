import { Header }           from "@/components/layout/Header/Header"
import { HeroSection }      from "@/components/features/HeroSection/HeroSection"
import { CharactersTable }  from "@/components/features/CharactersTable/CharactersTable"
import { HousesGrid }       from "@/components/features/HousesGrid/HousesGrid"
import { PatronosSection }  from "@/components/features/PatronosSection/PatronosSection"
import { ActorsTable }      from "@/components/features/ActorsTable/ActorsTable"
import { Footer }           from "@/components/layout/Footer/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CharactersTable />
        <HousesGrid />
        <PatronosSection />
        <ActorsTable />
      </main>
      <Footer />
    </>
  )
}
