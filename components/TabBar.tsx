import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import AboutMe from "./AboutMe/AboutMe"
import Skills from "./AboutMe/Skills"
import Technologies from "./AboutMe/Technologies"
import VerticalSteps from "./Experience/Stepper"

export default function Navbar() {
  return (
    <Tabs defaultValue="about-me" className="">
      <TabsList className="flex gap-6 justify-end h-[60px]">
        <div className="bg-[#4B4B4B] p-4 rounded-bl-xl rounded-tr-xl">
          <TabsTrigger value="about-me">Sobre mí</TabsTrigger>
          <TabsTrigger value="experience">Experiencia</TabsTrigger>
          <TabsTrigger value="education">Educación</TabsTrigger>
          <TabsTrigger value="contact">Contacto</TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="about-me" className="scrollbar-custom bg-[#2C2C2C] rounded-b-xl overflow-y-auto">
        <AboutMe/>
        <Skills/>
        <Technologies/>
      </TabsContent>
      <TabsContent value="experience" className="scrollbar-custom bg-[#2C2C2C] rounded-b-xl overflow-y-auto">
        <VerticalSteps/>
      </TabsContent>
    </Tabs>
  )
}
