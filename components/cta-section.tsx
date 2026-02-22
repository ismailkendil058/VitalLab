"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Mail, Phone, Calendar } from "lucide-react"
import { useRef, useState } from "react"

function MagneticButton({ children, className, href }: { children: React.ReactNode, className?: string, href: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const center = { x: left + width / 2, y: top + height / 2 }
    const distance = { x: clientX - center.x, y: clientY - center.y }
    mouseX.set(distance.x * 0.4)
    mouseY.set(distance.y * 0.4)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.a>
  )
}

export function CTASection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden bg-[#0A0A0A]">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-primary"
            >
              Initier votre évolution
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-6xl"
            >
              Prêt à affirmer votre <span className="text-primary italic">autorité ?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-xl text-white/60 leading-relaxed"
            >
              Nous ne concevons pas simplement des sites ; nous architecturons des écosystèmes
              numériques qui inspirent la confiance, bâtissent le prestige et génèrent des résultats sans concession.
            </motion.p>

            <div className="mt-12 space-y-6">
              {[
                { icon: Mail, text: "hello@vitallab.agency" },
                { icon: Phone, text: "+33 1 23 45 67 89" },
                { icon: Calendar, text: "Mon - Fri, 9am - 6pm CET" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 text-white/80"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 text-center"
              >
                <div className="mx-auto w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  >
                    <ArrowRight className="w-10 h-10 text-primary rotate-[-45deg]" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-white">Demande reçue avec succès.</h3>
                <p className="mt-4 text-white/60">Nos stratèges en croissance analyseront votre profil et reviendront vers vous sous 24 heures.</p>
              </motion.div>
            ) : (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Nom Complet</label>
                      <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-primary transition-colors outline-none" placeholder="Dr. Marie Lefebvre" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Adresse E-mail</label>
                      <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-primary transition-colors outline-none" placeholder="m.lefebvre@cabinet.fr" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Cabinet / Spécialisation</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-primary transition-colors outline-none" placeholder="Clinique de Chirurgie Esthétique" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Comment pouvons-nous vous aider ?</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-primary transition-colors outline-none resize-none" placeholder="Je souhaite élever ma présence digitale et attirer une patientèle exigeante..." />
                  </div>

                  <MagneticButton href="#" className="flex w-full">
                    <button type="submit" className="w-full bg-primary text-white py-5 rounded-[2rem] font-bold text-lg hover:shadow-[0_20px_40px_rgba(32,81,219,0.3)] transition-shadow flex items-center justify-center gap-3">
                      Soumettre la Demande <ArrowRight className="w-5 h-5" />
                    </button>
                  </MagneticButton>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
