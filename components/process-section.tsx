"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Sparkles, Zap, Shield, Palette } from "lucide-react"

const processSteps = [
  {
    icon: Sparkles,
    title: "Decouverte",
    description: "Nous analysons vos besoins, votre marche et vos objectifs pour definir la meilleure strategie.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creation d'une identite visuelle unique et d'une experience utilisateur optimisee.",
  },
  {
    icon: Zap,
    title: "Developpement",
    description: "Realisation technique performante, responsive et optimisee pour le referencement.",
  },
  {
    icon: Shield,
    title: "Lancement",
    description: "Mise en ligne, formation et suivi pour garantir le succes de votre presence digitale.",
  },
]

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Notre processus
          </span>
          <h2 className="mt-3 font-sans text-2xl font-medium leading-tight tracking-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl text-balance">
            Un accompagnement de A a Z
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
            Un processus simple et transparent pour donner vie a votre projet digital.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10 grid grid-cols-2 gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className={`group relative flex flex-col items-center text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                {/* Step number */}
                <div className="mb-3 text-xs font-semibold text-primary/40 sm:mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/[0.07] transition-all duration-300 group-hover:bg-primary/[0.12] group-hover:shadow-lg group-hover:shadow-primary/5 sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-base font-semibold text-foreground sm:mt-5 sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                  {step.description}
                </p>

                {/* Connector line (hidden on mobile and last) */}
                {i < processSteps.length - 1 && (
                  <div className="absolute top-10 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-border lg:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
