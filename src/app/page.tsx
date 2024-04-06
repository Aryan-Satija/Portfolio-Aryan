import About from "@/components/About"
import Contact from "@/components/Contact"
import Intro from "@/components/Intro"
import Projects from "@/components/Projects"
import { Skills } from "@/components/Skills"
import SectionDivider from "@/components/sectionDivider" 
export default function Home() {
  return (
    <main className="pt-28 flex flex-col items-center">
      <Intro />
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  )
}
