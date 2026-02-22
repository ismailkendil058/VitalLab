"use client"

import { motion, AnimatePresence, Variants } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  quote: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Marie Lefebvre",
    role: "Chirurgien-Dentiste, Paris",
    quote:
      "VitalLab a métamorphosé notre présence en ligne. Notre acquisition de nouveaux patients a crû de 60% en seulement trois mois. Leur maîtrise de l'expérience utilisateur haut de gamme est sans égale.",
    rating: 5,
  },
  {
    name: "Thomas Girard",
    role: "Kinésithérapeute d'Élite, Lyon",
    quote:
      "Le site est d'une élégance rare et reflète parfaitement le prestige de mon cabinet. Mes patients soulignent régulièrement la qualité de l'expérience numérique. Une révolution pour ma pratique.",
    rating: 5,
  },
  {
    name: "Sophie Martin",
    role: "Ostéopathe Spécialisée, Bordeaux",
    quote:
      "Un professionnalisme et des résultats qui ont surpassé toutes mes espérances. VitalLab saisit avec justesse les nuances du marché du bien-être de luxe.",
    rating: 5,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
}

const starVariants: Variants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 10,
    } as any,
  }),
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden bg-[#F4F4F0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Reconnaissance Internationale</span>
          <h2 className="mt-4 font-display text-4xl font-bold">La confiance de <span className="text-primary italic">l'élite médicale.</span></h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1, ease: "easeInOut" as any }}
              className="flex flex-col items-center text-center"
            >
              {/* Stars */}
              <div className="flex gap-2 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    custom={j}
                    variants={starVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Star className="h-6 w-6 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-2xl md:text-4xl font-medium leading-[1.3] text-foreground mb-12 italic">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="h-14 w-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">{testimonials[current].name}</p>
                  <p className="text-sm text-primary uppercase tracking-widest font-black">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-16 flex items-center justify-center gap-8">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-primary/10 hover:bg-white hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-12 bg-primary" : "w-1.5 bg-primary/20"
                    }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full border border-primary/10 hover:bg-white hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
