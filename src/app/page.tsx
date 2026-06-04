'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Bot, LayoutTemplate, Settings2, Shield, MessageSquare, Terminal } from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: 'Advanced Ticket System',
    description: 'Enterprise-grade Discord ticket system with transcript logging, multi-panel support, and staff analytics.',
    tech: ['TypeScript', 'Discord.js', 'PostgreSQL'],
    icon: MessageSquare
  },
  {
    title: 'Verification System',
    description: 'Secure captcha and web-based OAuth2 verification bot to prevent raids and malicious actors.',
    tech: ['Next.js', 'TypeScript', 'Redis'],
    icon: Shield
  },
  {
    title: 'Moderation Bot',
    description: 'Automated moderation with customizable automod rules, logging, and advanced strike systems.',
    tech: ['Python', 'discord.py', 'MongoDB'],
    icon: Bot
  },
  {
    title: 'Dashboard Website',
    description: 'Modern web interface for managing Discord bot settings, viewing statistics, and configuring modules.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    icon: LayoutTemplate
  },
  {
    title: 'Automation Tools',
    description: 'Custom Python scripts for scraping, data processing, and workflow automation.',
    tech: ['Python', 'Selenium', 'REST APIs'],
    icon: Settings2
  }
]

const TECHNOLOGIES = [
  { name: 'Python', icon: '🐍' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Lua', icon: '🌙' },
  { name: 'HTML/CSS', icon: '🎨' }
]

const STATS = [
  { label: 'Projects Completed', value: '40+' },
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Support Availability', value: '24/7' }
]

// ─── Animations ──────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

// ─── Components ──────────────────────────────────────────────────────────────

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="relative min-h-screen bg-[#09090B] overflow-hidden selection:bg-zinc-800 selection:text-white">
      
      {/* ─── Background Effects ─── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.03), transparent 40%)`
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center pt-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mb-10 shadow-2xl">
              <Terminal size={28} className="text-zinc-100" />
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-100 mb-6">
              Curzservice
            </motion.h1>
            
            <motion.h2 variants={fadeUp} className="text-xl md:text-3xl text-zinc-400 font-medium mb-6">
              Discord Bot Developer & Automation Engineer
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-12 leading-relaxed">
              Building premium Discord systems, custom bots, dashboards, websites, and robust automation solutions tailored for your community or business.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-20">
              <a 
                href="https://discord.com/users/1153392848490737684" 
                target="_blank" 
                rel="noreferrer" 
                className="group flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 w-full sm:w-auto"
              >
                Start a Project <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#projects" 
                className="flex items-center justify-center gap-2 bg-transparent border border-zinc-800 text-zinc-300 px-8 py-4 rounded-full font-medium hover:bg-zinc-900 hover:text-zinc-100 transition-all duration-300 w-full sm:w-auto"
              >
                View Portfolio
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-zinc-900">
              <div>
                <h4 className="text-3xl font-bold text-zinc-100 mb-1">40+</h4>
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-zinc-100 mb-1">Fast</h4>
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Delivery</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-zinc-100 mb-1">Custom</h4>
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Solutions</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section id="projects" className="relative z-10 py-32 bg-zinc-950/50 border-y border-zinc-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-6">Selected Work</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              A showcase of premium systems, bots, and tools engineered for scalability and seamless user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-3xl bg-[#0e0e11] border border-zinc-800/80 hover:border-zinc-700 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
              >
                <div className="aspect-video bg-zinc-900 relative overflow-hidden flex items-center justify-center p-8 border-b border-zinc-800/80">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <project.icon size={64} strokeWidth={1.5} className="text-zinc-700 transform group-hover:scale-110 group-hover:text-zinc-500 transition-all duration-500" />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-zinc-100 mb-3">{project.title}</h3>
                  <p className="text-zinc-400 mb-8 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-zinc-900 text-zinc-300 text-xs font-medium rounded-lg border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tech Stack ─── */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-6">Technology Stack</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Specialized expertise in modern programming languages to build efficient, maintainable, and high-performance applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {TECHNOLOGIES.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800/80 transition-colors cursor-default"
              >
                <span className="text-2xl drop-shadow-md">{tech.icon}</span>
                <span className="font-semibold text-zinc-200">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust / Stats ─── */}
      <section className="relative z-10 pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">
            {STATS.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-10 rounded-3xl bg-[#0e0e11] border border-zinc-800/80"
              >
                <div className="text-4xl md:text-5xl font-bold text-zinc-100 mb-3">{stat.value}</div>
                <div className="text-zinc-500 font-medium uppercase tracking-widest text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section className="relative z-10 py-32 bg-zinc-950/50 border-t border-zinc-900">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto bg-[#09090b] border border-zinc-800 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-6 relative z-10 tracking-tight">
              Ready to build your next project?
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Let's collaborate to bring your ideas to life with clean architecture, premium design, and scalable code.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <a 
                href="https://discord.com/users/1153392848490737684" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-zinc-100 text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300"
              >
                <MessageSquare size={20} /> Message on Discord
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="relative z-10 py-10 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-sm font-medium">
          © {new Date().getFullYear()} Curzservice. Crafted with precision.
        </p>
      </footer>

    </main>
  )
}