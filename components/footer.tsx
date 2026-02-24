"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = [
  {
    title: "Agence",
    links: [
      { label: "Mission", href: "#mission" },
      { label: "Programmes", href: "#services" },
      { label: "Réalisations", href: "#portfolio" },
      { label: "Témoignages", href: "#testimonials" },
    ],
  },
  {
    title: "Solutions Élite",
    links: [
      { label: "Fondation", href: "#services" },
      { label: "Ascension", href: "#services" },
      { label: "Prestige", href: "#services" },
      { label: "Conseil Stratégique", href: "#services" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@vitallab.agency", href: "mailto:hello@vitallab.agency" },
      { label: "Planifier un Appel", href: "#cta" },
      { label: "Support Dédié", href: "#" },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export function Footer() {
  return (
    <footer className="relative bg-[#FBFBF9] pt-24 pb-12 overflow-hidden border-t border-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-4"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-sm overflow-hidden border border-primary/20 bg-white transition-all duration-700 group-hover:border-primary/50">
                <img src="/VitalWeb.png" alt="Logo" className="h-full w-full object-contain p-1 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="font-brand text-3xl font-semibold text-foreground tracking-[-0.02em] leading-none transition-colors duration-500 group-hover:text-primary">
                  Vital<span className="text-primary">Lab</span>
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-primary/40 mt-1">Creative Agency</span>
              </div>
            </a>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Architecte d'expériences numériques de prestige pour les praticiens
              de santé et du bien-être les plus exigeants au monde.
            </p>
            <div className="mt-8 flex gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, scale: 1.1, color: "var(--primary)" }}
                  className="text-muted-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {footerLinks.map((col, i) => (
            <motion.div key={i} variants={itemVariants}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-6">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 6 }}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-all flex items-center gap-2 group"
                    >
                      {link.label}
                      <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all duration-300" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            &copy; {new Date().getFullYear()} VitalLab Creative. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Politique de Confidentialité</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Conditions Générales</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
