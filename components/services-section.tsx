"use client"

import { motion, Variants } from "framer-motion"
import { Check, Star, ArrowRight } from "lucide-react"

interface Package {
  tier: string
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
  elite?: boolean
}

const packages: Package[] = [
  {
    tier: "Starter",
    name: "Fondation",
    price: "€599",
    description: "Une présence digitale essentielle pour les praticiens en devenir.",
    features: [
      "Page de Capture sur Mesure",
      "Architecture Mobile-First",
      "Stratégie SEO Fondamentale",
      "Intégration de Contact",
      "Identité Visuelle de Base",
    ],
    cta: "Débuter",
  },
  {
    tier: "Professional",
    name: "Ascension",
    price: "€799",
    description: "Un écosystème complet conçu pour maximiser l'acquisition de patients.",
    features: [
      "Site d'Autorité Multi-pages",
      "Infrastructure SEO Avancée",
      "Système de Réservation Intégré",
      "Stratégie de Contenu Élite",
      "Analytique de Performance",
    ],
    cta: "Passer au Pro",
    popular: true,
  },
  {
    tier: "Elite",
    name: "Prestige",
    price: "€999",
    description: "L'étalon-or pour les établissements de santé de classe mondiale.",
    features: [
      "UX Haute Performance Bespoke",
      "Identité de Marque Complète",
      "Applications Web Sur Mesure",
      "Support Conciergerie Dédié",
      "Sprints de Croissance Mensuels",
    ],
    cta: "Saisir l'Excellence",
    elite: true,
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.2,
      ease: "easeOut" as any,
    },
  }),
}

function PricingCard({ pkg, i }: { pkg: Package; i: number }) {
  return (
    <motion.div
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`group relative flex h-full flex-col rounded-[2.5rem] border bg-card p-10 transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] ${pkg.elite ? "border-primary/20 elite-border-glow" : "border-primary/5"
        } ${pkg.popular ? "shadow-2xl shadow-primary/5" : ""}`}
    >
      {pkg.elite && (
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" as any }}
          className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/20 pointer-events-none"
        />
      )}

      <div className={`${pkg.elite ? "elite-border-glow-inner h-full w-full rounded-[2.4rem] p-1 bg-white" : ""}`}>
        <div className="h-full w-full p-2">
          {/* Popular badge */}
          {pkg.popular && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
              <Star className="h-3 w-3 fill-current" />
              Most Popular
            </div>
          )}

          {/* Header */}
          <div className="mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
              {pkg.tier}
            </span>
            <h3 className="mt-2 font-display text-3xl font-bold text-foreground">
              {pkg.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {pkg.description}
            </p>
          </div>

          {/* Price */}
          <div className="mb-10">
            <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
          </div>

          {/* Features */}
          <ul className="mb-12 flex-1 space-y-4">
            {pkg.features.map((feature, j) => (
              <li key={j} className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="#cta"
            whileHover={{ y: -4 }}
            className={`flex items-center justify-center gap-3 rounded-full py-4 text-sm font-bold tracking-wide transition-all duration-300 ${pkg.popular || pkg.elite
              ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
              : "border border-primary/10 bg-card text-foreground hover:bg-secondary"
              }`}
          >
            {pkg.cta}
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-[#F8F8F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary"
          >
            Nos Programmes d'Accompagnement
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl"
          >
            Investissez dans votre <span className="text-primary italic">avenir numérique.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            Des solutions architecturales conçues pour le prestige, l'autorité et une performance sans compromis.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <PricingCard key={i} pkg={pkg} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
