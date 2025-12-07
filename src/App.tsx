import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { ScheduleSection } from "./components/schedule-section"
import { BenefitsSection } from "./components/benefits-section"
import { InstructorSection } from "./components/instructor-section"
import { LocationSection } from "./components/location-section"
import { CtaSection } from "./components/cta-section"
import { Footer } from "./components/footer"

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <BenefitsSection />
      <InstructorSection />
      <LocationSection />
      <CtaSection />
      <Footer />
    </main>
  )
}

export default App
