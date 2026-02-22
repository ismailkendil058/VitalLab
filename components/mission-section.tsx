"use client"

import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef } from "react"
import { Stethoscope, Dumbbell, Heart, Dog, Brain, Activity } from "lucide-react"

const sectors = [
  { icon: Stethoscope, label: "Dentists" },
  { icon: Activity, label: "Physios" },
  { icon: Brain, label: "Osteopaths" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: Dog, label: "Vets" },
  { icon: Heart, label: "Therapists" },
]

const stats = [
  { value: "50+", label: "Success Stories" },
  { value: "98%", label: "Client Love" },
  { value: "3x", label: "Better ROAS" },
]

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as any,
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 } as any,
  },
}

export function MissionSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="mission" className="relative py-24 sm:py-32 overflow-hidden" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center"
        >
          {/* Text Column */}
          <div>
            <motion.span
              variants={itemVariants}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary"
            >
              Notre Raison d'Être
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              L'excellence dans chaque pixel,{" "}
              <span className="text-primary italic">l'autorité dans chaque interaction.</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
            >
              Nous façonnons des identités numériques de prestige qui transcendent l'ordinaire.
              Notre approche allie un design méticuleux à des parcours stratégiques,
              pensés exclusivement pour l'élite du secteur médical et du bien-être.
            </motion.p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-primary/10 pt-10">
              {stats.map((stat, i) => {
                const frenchLabels: { [key: string]: string } = {
                  "Success Stories": "Histoires de Succès",
                  "Client Love": "Satisfaction Client",
                  "Better ROAS": "Optimisation ROAS"
                }
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                  >
                    <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {frenchLabels[stat.label] || stat.label}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Sector Icons Grid with Parallax Effect */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {sectors.map((sector, i) => {
                const Icon = sector.icon
                const frenchSectors: { [key: string]: string } = {
                  "Dentists": "Dentistes",
                  "Physios": "Kinés",
                  "Osteopaths": "Ostéopathes",
                  "Fitness": "Fitness Élite",
                  "Vets": "Vétérinaires",
                  "Therapists": "Thérapeutes"
                }
                return (
                  <motion.div
                    key={i}
                    variants={iconVariants}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                      boxShadow: "0 20px 30px rgba(32, 81, 219, 0.08)"
                    }}
                    className="group luxury-glow flex flex-col items-center gap-4 rounded-3xl border border-primary/5 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/[0.07] transition-colors duration-300 group-hover:bg-primary group-hover:text-white sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground text-center">
                      {frenchSectors[sector.label] || sector.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            {/* Subtle background glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
