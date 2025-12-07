import { Button } from "./ui/button"
import { MessageCircle, Clock } from "lucide-react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

export function HeroSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/shaolin-kung-fu-training-martial-arts-traditional-.jpg"
          alt="Entrenamiento de Shaolin Kung-Fu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1614]/80 via-[#1a1614]/60 to-[#1a1614]/90" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className={`text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4 transition-all duration-500 ease-out delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Gimnasio Golden Boy · Estepona
          </p>
          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight transition-all duration-500 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Shaolin Kung-Fu Auténtico en Estepona
          </h1>
          <p
            className={`text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed transition-all duration-500 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Descubre el arte marcial milenario del Shaolin Kung-Fu. Clases para niños y adultos con enfoque en
            disciplina, respeto y desarrollo físico integral.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 ease-out delay-[400ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#8b1a1a] hover:bg-[#a82828] text-white px-8 py-6 text-lg"
            >
              <a href="#horarios">
                <Clock className="w-5 h-5 mr-2" />
                Ver horarios
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#1a1614] px-8 py-6 text-lg bg-transparent"
            >
              <a href="https://wa.me/34634220377" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
