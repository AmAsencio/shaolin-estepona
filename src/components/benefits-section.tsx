import { Card, CardContent } from "./ui/card"
import { Dumbbell, Brain, Shield, Heart, Target, Zap } from "lucide-react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

const benefits = [
  {
    icon: Dumbbell,
    title: "Mejora física",
    description: "Desarrolla fuerza, flexibilidad, resistencia y coordinación con un entrenamiento completo.",
  },
  {
    icon: Brain,
    title: "Concentración",
    description: "Entrena tu mente para mantener el foco y la atención en cada momento del día.",
  },
  {
    icon: Shield,
    title: "Autodefensa",
    description: "Aprende técnicas efectivas de defensa personal basadas en siglos de tradición marcial.",
  },
  {
    icon: Heart,
    title: "Disciplina",
    description: "Cultiva hábitos positivos, constancia y respeto hacia ti mismo y los demás.",
  },
  {
    icon: Target,
    title: "Confianza",
    description: "Fortalece tu autoestima y seguridad a través del dominio de nuevas habilidades.",
  },
  {
    icon: Zap,
    title: "Energía",
    description: "Aumenta tu vitalidad y bienestar general con entrenamientos que revitalizan cuerpo y mente.",
  },
]

export function BenefitsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} id="beneficios" className="py-20 lg:py-32 bg-[#faf8f5] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-[#8b1a1a] font-medium tracking-widest uppercase text-sm mb-4">Beneficios</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1614] mb-4 text-balance">
            Transforma tu vida con el Kung-Fu
          </h2>
          <p className="text-[#5c534a] max-w-2xl mx-auto text-pretty">
            El Shaolin Kung-Fu va más allá de la práctica física. Es un camino de desarrollo personal que impacta
            positivamente en todos los aspectos de tu vida.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`bg-white border-[#e5dfd8] hover:border-[#8b1a1a]/50 transition-all duration-500 ease-out hover:shadow-lg group ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
                }`}
              style={{ transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms" }}
            >
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-lg bg-[#8b1a1a]/10 flex items-center justify-center mb-4 group-hover:bg-[#8b1a1a]/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-[#8b1a1a]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1a1614] mb-2">{benefit.title}</h3>
                <p className="text-[#5c534a] text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
