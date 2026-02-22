"use client"

import { motion, Variants } from "framer-motion"
import { ArrowDown } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1] as any, // easeInOut approximation
    },
  },
}

const subItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut" as any,
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-20 sm:px-6">
      {/* Animated Background Image with Blue Filter */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale-[0.2]"
        />
        {/* Blue Overlay / Filter */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        {/* Badge */}
        <motion.div
          variants={subItemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-white shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          Partenaire Digital de l'Élite Médicale
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl text-balance"
        >
          Élever la médecine au rang{" "}
          <span className="text-white italic font-light opacity-90 underline decoration-white/30 decoration-offset-8">d'excellence numérique.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={subItemVariants}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
        >
          Nous architecturons des expériences digitales de prestige pour les praticiens d'exception.
          Affirmez votre autorité et attirez une patientèle à haute valeur ajoutée.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={subItemVariants}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.a
            href="#cta"
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.15)"
            }}
            transition={{ duration: 0.6, ease: "easeInOut" as any }}
            className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary sm:w-auto"
          >
            Initier votre transformation
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>

          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/20 sm:w-auto"
          >
            Consulter nos réalisations
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#mission"
          className="flex flex-col items-center gap-3 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Explorer l'univers</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as any }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
