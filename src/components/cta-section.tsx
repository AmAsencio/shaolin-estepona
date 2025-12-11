import { Button } from "./ui/button"
import { MessageCircle, Phone } from "lucide-react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

export function CtaSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} id="contacto" className="py-20 lg:py-32 bg-[#1a1614] text-[#faf8f5] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
            }`}
        >
          <p
            className={`text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4 transition-all duration-500 ease-out delay-100 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            ¿Listo para empezar?
          </p>
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance transition-all duration-500 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Reserva tu clase de prueba gratuita
          </h2>
          <p
            className={`text-[#faf8f5]/80 text-lg mb-10 max-w-2xl mx-auto text-pretty transition-all duration-500 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Da el primer paso hacia tu transformación. Contacta con nosotros y ven a conocer nuestra escuela sin ningún
            compromiso. ¡Te esperamos!
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 ease-out delay-[400ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#8b1a1a] hover:bg-[#a82828] text-white px-8 py-6 text-lg"
            >
              <a href="https://wa.me/34634220377" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-[#faf8f5] text-[#faf8f5] hover:bg-[#faf8f5] hover:text-[#1a1614] px-8 py-6 text-lg bg-transparent"
            >
              <a href="tel:+34634220377">
                <Phone className="w-5 h-5 mr-2" />
                Llamar ahora
              </a>
            </Button>
          </div>

          <p
            className={`mt-8 text-[#faf8f5]/60 text-sm transition-all duration-500 ease-out delay-500 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            +34 634 220 377 · Respuesta rápida garantizada
          </p>
        </div>
      </div>
    </section>
  )
}
