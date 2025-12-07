import { useScrollAnimation } from "../hooks/use-scroll-animation"

export function AboutSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} id="escuela" className="py-20 lg:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-[#8b1a1a] font-medium tracking-widest uppercase text-sm mb-4">Sobre la escuela</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1614] mb-6 text-balance">
              Tradición y disciplina del auténtico Shaolin
            </h2>
            <div className="space-y-4 text-[#5c534a] leading-relaxed">
              <p>
                En nuestra escuela enseñamos las bases tradicionales del Shaolin Kung-Fu, un arte marcial milenario que
                combina técnicas de combate, acondicionamiento físico y desarrollo mental.
              </p>
              <p>
                Nuestro enfoque se centra en la <strong className="text-[#1a1614]">disciplina</strong>, el{" "}
                <strong className="text-[#1a1614]">respeto</strong> y la
                <strong className="text-[#1a1614]"> condición física</strong>, valores fundamentales que acompañarán a
                nuestros alumnos dentro y fuera del tatami.
              </p>
              <p>
                Tanto si eres principiante como si ya tienes experiencia en artes marciales, nuestro programa está
                diseñado para adaptarse a tu nivel y ayudarte a progresar de manera constante y segura.
              </p>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 transition-all duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#c9a227]/20 rounded-lg -z-10" />
              <img
                src="/kung-fu-student-training-traditional-martial-arts.jpg"
                alt="Estudiante practicando Kung-Fu"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
