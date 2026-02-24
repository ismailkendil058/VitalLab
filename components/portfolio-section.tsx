"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ExternalLink, X, MoveHorizontal } from "lucide-react"

interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  color: string
  url?: string
  image?: string
  modalImage?: string
}

const projects: Project[] = [
  {
    title: "NEDJMA dental clinic system",
    category: "Dentistry",
    description: "A full-scale rebrand and digital patient acquisition system that increased bookings by 145%.",
    tags: ["Authority Site", "Patient Portal", "SEO"],
    color: "bg-primary/[0.06]",
    url: "https://clinic-nedjma.vercel.app/",
    image: "/Screenshot 2026-02-24 022524.png",
    modalImage: "/Screenshot 2026-02-24 022619.png",
  },
  {
    title: "Physio Bordeaux",
    category: "Physiotherapy",
    description: "High-performance landing pages optimized for elite athletic recovery segments.",
    tags: ["Performance UX", "Conversion", "Mobile"],
    color: "bg-[#E8F0FE]",
  },
  {
    title: "FitZone Elite",
    category: "Fitness",
    description: "A premium membership portal with interactive scheduling and personalized growth tracking.",
    tags: ["Web App", "Branding", "Analytics"],
    color: "bg-secondary",
  },
]

function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50)

  const handleDrag = (e: any) => {
    const container = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX || e.touches[0].clientX) - container.left) / container.width
    setSliderPos(Math.max(0, Math.min(100, x * 100)))
  }

  return (
    <div
      className="relative h-64 w-full overflow-hidden rounded-3xl cursor-ew-resize group"
      onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
      onTouchMove={handleDrag}
      onMouseDown={handleDrag}
    >
      <div className="absolute inset-0 bg-muted flex items-center justify-center">
        <span className="text-4xl font-black text-white/20 select-none uppercase">After</span>
      </div>
      <div
        className="absolute inset-0 bg-primary/20 flex items-center justify-center overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <span className="text-4xl font-black text-primary/40 select-none uppercase absolute left-1/2 -translate-x-1/2">Before</span>
      </div>
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-10"
        style={{ left: `${sliderPos}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-2xl flex items-center justify-center">
          <MoveHorizontal className="w-4 h-4 text-primary" />
        </div>
      </motion.div>
    </div>
  )
}

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary"
          >
            Work Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl"
          >
            Transformations <span className="text-primary italic">defined.</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateX: 3,
                rotateY: 3,
                boxShadow: "0 30px 60px rgba(0,0,0,0.12)"
              }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer flex flex-col overflow-hidden rounded-[2.5rem] border border-primary/5 bg-[#FBFBF9] p-2 transition-all duration-500 perspective-1000"
            >
              <div className={`${project.color} relative h-64 overflow-hidden rounded-[2rem] flex items-center justify-center`}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-6xl font-black text-foreground/5">{project.title.charAt(0)}</span>
                )}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Promo */}
        <div className="mt-24 bg-primary/[0.02] rounded-[3rem] p-8 md:p-16 border border-primary/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Interactive Comparison</span>
              <h3 className="mt-4 font-display text-3xl font-bold">The VitalLab Impact.</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Witness the transformation from generic digital presence to high-ticket authority.
                Drag to see the difference our UX architecture makes.
              </p>
            </div>
            <BeforeAfterSlider />
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-secondary hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className={`${selectedProject.color} h-64 md:h-auto flex items-center justify-center p-12`}>
                  <div className="text-center">
                    {selectedProject.modalImage ? (
                      <img 
                        src={selectedProject.modalImage} 
                        alt={selectedProject.title} 
                        className="w-full h-auto rounded-2xl shadow-lg"
                      />
                    ) : selectedProject.image ? (
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-auto rounded-2xl shadow-lg"
                      />
                    ) : (
                      <>
                        <span className="text-8xl font-black text-foreground/5">{selectedProject.title.charAt(0)}</span>
                        <p className="mt-4 font-bold text-primary">Visual Identity</p>
                      </>
                    )}
                  </div>
                </div>
                <div className="p-8 md:p-16">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{selectedProject.category}</span>
                  <h3 className="mt-4 font-display text-4xl font-bold text-foreground">{selectedProject.title}</h3>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="mt-10 space-y-4">
                    <p className="text-sm font-bold uppercase tracking-widest">Key Deliverables</p>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag, j) => (
                        <span key={j} className="rounded-full bg-secondary px-4 py-2 text-xs font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.url ? (
                    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="mt-12 w-full bg-primary text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-xl transition-shadow">
                      View Live Project <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="mt-12 w-full bg-primary text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-xl transition-shadow">
                      View Live Project <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
