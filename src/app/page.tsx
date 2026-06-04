'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Bot, LayoutTemplate, Settings2, Shield, MessageSquare, Terminal, Code2 } from 'lucide-react'

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
  { name: 'C++' },
  { name: 'C' },
  { name: 'C#' },
  { name: 'Python' },
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'Lua' },
  { name: 'HTML/CSS' }
]

const STATS = [
  { label: 'Projects Completed', value: '40+' },
  { label: 'Client Satisfaction', value: '100' },
  { label: 'Support Availability', value: '24/7' }
]

// ─── Animations ──────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
}

// ─── Components ──────────────────────────────────────────────────────────────

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother mouse tracking
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY })
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="relative min-h-screen bg-[#09090B] overflow-hidden selection:bg-zinc-100 selection:text-zinc-900 text-zinc-100">
      
      {/* ─── Background Effects ─── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />
        <div 
          className="absolute inset-0 transition-opacity duration-500 ease-out"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.04), transparent 40%)`
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center pt-20">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-6 md:px-12"
        >
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.div variants={scaleIn} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-zinc-800 flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(255,255,255,0.05)] overflow-hidden bg-zinc-900">
              <img 
                src="/pfp.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://i.imgur.com/8m5k2e3.jpeg"; 
                }}
              />
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white mb-6">
              Curz
            </motion.h1>
            
            <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl text-zinc-400 font-medium mb-8 tracking-tight">
              Discord Bot Developer <span className="hidden sm:inline">&</span><span className="sm:hidden"><br/>&</span> Automation Engineer
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-14 leading-relaxed font-light">
              Building premium Discord systems, custom bots, dashboards, websites, and robust automation solutions tailored for your community or business.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-24">
              <a 
                href="https://discord.com/users/1153392848490737684" 
                target="_blank" 
                rel="noreferrer" 
                className="group relative flex items-center justify-center gap-3 bg-zinc-100 text-zinc-950 px-8 py-4 rounded-full font-bold transition-all duration-300 w-full sm:w-auto overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Start a Project <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a 
                href="#projects" 
                className="group flex items-center justify-center gap-3 bg-transparent border border-zinc-800 text-zinc-300 px-8 py-4 rounded-full font-semibold hover:bg-zinc-900 hover:text-white transition-all duration-300 w-full sm:w-auto hover:border-zinc-700"
              >
                View Portfolio
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section id="projects" className="relative z-10 py-32 bg-zinc-950/50 border-y border-zinc-900/50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Selected Work</h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              A showcase of premium systems, bots, and tools engineered for scalability and seamless user experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group rounded-[2rem] bg-[#0e0e11] border border-zinc-800/80 hover:border-zinc-600/80 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
              >
                <div className="aspect-[16/9] bg-[#141417] relative overflow-hidden flex items-center justify-center p-8 border-b border-zinc-800/80">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <project.icon size={72} strokeWidth={1.2} className="text-zinc-700 transform group-hover:scale-110 group-hover:text-zinc-400 transition-all duration-700 ease-out" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-4 tracking-tight">{project.title}</h3>
                  <p className="text-zinc-400 mb-8 leading-relaxed font-light text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-2 bg-zinc-900/80 text-zinc-300 text-sm font-medium rounded-xl border border-zinc-800/80">
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
      <section className="relative z-10 py-40">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Technology Stack</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Specialized expertise in modern programming languages to build efficient, maintainable, and high-performance applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {TECHNOLOGIES.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center justify-center p-8 sm:p-12 rounded-[2rem] bg-zinc-900/50 border border-zinc-800/80 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/5 cursor-default group"
              >
                <Code2 size={24} className="text-zinc-600 mb-4 group-hover:text-zinc-400 transition-colors" />
                <span className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust / Stats ─── */}
      <section className="relative z-10 pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-center max-w-6xl mx-auto">
            {STATS.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-12 rounded-[2.5rem] bg-[#0e0e11] border border-zinc-800/80"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">{stat.value}</div>
                <div className="text-zinc-500 font-semibold uppercase tracking-widest text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section className="relative z-10 py-32 bg-zinc-950/50 border-t border-zinc-900/50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto bg-[#09090b] border border-zinc-800 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 relative z-10 tracking-tight">
              Ready to build your next project?
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-14 max-w-2xl mx-auto relative z-10 leading-relaxed font-light">
              Let's collaborate to bring your ideas to life with clean architecture, premium design, and scalable code.
            </p>
            
            <div className="flex justify-center relative z-10">
              <a 
                href="https://discord.com/users/1153392848490737684" 
                target="_blank" 
                rel="noreferrer" 
                className="group w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-zinc-100 text-zinc-950 px-10 py-5 rounded-full font-bold hover:bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <MessageSquare size={22} className="transition-transform group-hover:scale-110" /> Message on Discord
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="relative z-10 py-12 border-t border-zinc-900/80 text-center bg-[#09090B]">
        <p className="text-zinc-600 text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} Curz. Crafted with precision.
        </p>
      </footer>

    </main>
  )
}
