import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Clock, Users } from "lucide-react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

const schedules = [
  {
    title: "Grupo 1",
    subtitle: "Menores de 14 años",
    days: "Martes y Jueves",
    time: "19:00 - 20:00",
    icon: Users,
    description: "Clases adaptadas para niños y jóvenes, enfocadas en disciplina, coordinación y valores marciales.",
  },
  {
    title: "Grupo 2",
    subtitle: "Mayores de 14 años",
    days: "Martes y Jueves",
    time: "20:00 - 21:00",
    icon: Users,
    description:
      "Entrenamiento avanzado para adolescentes y adultos, con técnicas tradicionales y acondicionamiento físico.",
  },
]

export function ScheduleSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} id="horarios" className="py-20 lg:py-32 bg-[#1a1614] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-[#8b1a1a] font-medium tracking-widest uppercase text-sm mb-4">Horarios y grupos</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf8f5] mb-4 text-balance">
            Encuentra tu grupo de entrenamiento
          </h2>
          <p className="text-[#a09080] max-w-2xl mx-auto text-pretty">
            Ofrecemos clases diferenciadas por edades para garantizar un aprendizaje óptimo y seguro para todos nuestros
            alumnos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {schedules.map((schedule, index) => (
            <Card
              key={index}
              className={`bg-white border-[#3a3230] hover:border-[#8b1a1a]/50 transition-all duration-500 ease-out hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms" }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#8b1a1a]/10 flex items-center justify-center">
                    <schedule.icon className="w-6 h-6 text-[#8b1a1a]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-serif text-[#1a1614]">{schedule.title}</CardTitle>
                    <p className="text-sm text-[#5c534a]">{schedule.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-[#8b1a1a]/5 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 text-[#8b1a1a] font-semibold mb-1">
                    <Clock className="w-4 h-4" />
                    <span>{schedule.days}</span>
                  </div>
                  <p className="text-2xl font-bold text-[#1a1614]">{schedule.time}</p>
                </div>
                <p className="text-[#5c534a] text-sm leading-relaxed">{schedule.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
