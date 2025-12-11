import { Card, CardContent } from "./ui/card"
import { Award, GraduationCap, Users } from "lucide-react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

export function InstructorSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref as any} id="profesor" className="py-20 lg:py-32 bg-[#1a1614] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-[#8b1a1a] font-medium tracking-widest uppercase text-sm mb-4">Tu instructor</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf8f5] mb-4 text-balance">
            Aprende con un maestro dedicado
          </h2>
        </div>

        <Card
          className={`max-w-4xl mx-auto bg-white border-[#3a3230] overflow-hidden transition-all duration-700 ease-out delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <CardContent className="p-0">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 bg-[#f0ebe5]">
                <div className="aspect-square md:aspect-auto md:h-full flex items-center justify-center bg-[#8b1a1a]/5">
                  <img
                    src="/shaolin-estepona/martial-arts-instructor-portrait-professional.jpg"
                    alt="Javier Sanchez - Instructor de Shaolin Kung-Fu"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-3 p-6 lg:p-8">
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#1a1614] mb-2">Javier</h3>
                <p className="text-[#8b1a1a] font-medium mb-4">Instructor Principal</p>

                <p className="text-[#5c534a] leading-relaxed mb-6">
                  Con años de experiencia en artes marciales y formación en Shaolin Kung-Fu tradicional, Javier combina
                  técnica rigurosa con un enfoque pedagógico adaptado a cada alumno. Su pasión por las artes marciales y
                  la enseñanza crea un ambiente de aprendizaje motivador y respetuoso donde cada estudiante puede
                  desarrollar su máximo potencial.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Award, label: "Certificado" },
                    { icon: GraduationCap, label: "Formación continua" },
                    { icon: Users, label: "Todas las edades" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`text-center p-3 bg-[#8b1a1a]/5 rounded-lg transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                      style={{ transitionDelay: isVisible ? `${400 + index * 100}ms` : "0ms" }}
                    >
                      <item.icon className="w-6 h-6 text-[#8b1a1a] mx-auto mb-2" />
                      <p className="text-xs text-[#5c534a]">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
