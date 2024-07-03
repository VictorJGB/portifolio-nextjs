import AboutSection from '@/components/sections/about-section'
import HomeSection from '@/components/sections/home-section'
import SkillSection from '@/components/sections/skills-section'

export default function Home() {
  return (
    <main className="grid min-h-screen w-full grid-cols-1 grid-rows-sections place-content-center">
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <div className="col-span-1 row-span-1 bg-black"></div>
    </main>
  )
}
