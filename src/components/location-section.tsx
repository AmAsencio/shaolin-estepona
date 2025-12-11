import { MapPin, Clock, Building } from "lucide-react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

export function LocationSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref as any} className="py-20 lg:py-32 bg-[#faf8f5] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-[#8b1a1a] font-medium tracking-widest uppercase text-sm mb-4">Ubicación</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1614] mb-4 text-balance">
            Dónde entrenamos
          </h2>
          <p className="text-[#5c534a] max-w-2xl mx-auto text-pretty">
            Nuestras clases se imparten en las instalaciones del gimnasio Golden Boy, un espacio equipado y cómodo en el
            corazón de Estepona.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div
            className={`bg-white border border-[#e5dfd8] rounded-lg p-6 lg:p-8 transition-all duration-700 ease-out delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#8b1a1a]/10 flex items-center justify-center shrink-0">
                <Building className="w-6 h-6 text-[#8b1a1a]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1a1614] mb-1">Gimnasio Golden Boy</h3>
                <p className="text-[#5c534a]">Centro deportivo en Estepona</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8b1a1a] mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-[#1a1614]">Dirección</p>
                  <p className="text-[#5c534a]">Estepona, Málaga, España</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#8b1a1a] mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-[#1a1614]">Horario de clases</p>
                  <p className="text-[#5c534a]">Martes y Jueves: 19:00 - 21:00</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#e5dfd8]">
              <p className="text-sm text-[#5c534a]">
                Instalaciones con vestuarios, duchas y zona de entrenamiento amplia. Fácil acceso y aparcamiento
                disponible en las inmediaciones.
              </p>
            </div>
          </div>

          <div
            className={`h-[300px] lg:h-auto min-h-[400px] rounded-lg overflow-hidden border border-[#e5dfd8] transition-all duration-700 ease-out delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6420.359206512499!2d-5.1495012237230124!3d36.429039588533286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0cd6a378969c2d%3A0xa4bc6d051cffb22b!2sGolden%20Boy%20Y%20Muaythai%20Estepona!5e0!3m2!1ses!2ses!4v1765128954068!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del gimnasio Golden Boy en Estepona"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
