'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Terminal, Monitor, Database, Cpu, Globe, Braces, Copy, Check, MessageSquare } from 'lucide-react'

const languages = [
  { name: 'C++', icon: '⚡', color: '#00599C' },
  { name: 'C', icon: '⚙️', color: '#A8B9CC' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'JavaScript', icon: '🟨', color: '#F7DF1E' },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
  { name: 'Rust', icon: '🦀', color: '#CE422B' },
  { name: 'C#', icon: '🎯', color: '#239120' },
  { name: 'Lua', icon: '🌙', color: '#000080' },
  { name: 'Java', icon: '☕', color: '#ED8B00' },
  { name: 'HTML/CSS', icon: '🎨', color: '#E34F26' },
]

const technologies = [
  { name: 'Next.js', icon: '▲' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Discord.js', icon: '🤖' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '📚' },
  { name: 'Linux', icon: '🐧' },
]

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'languages' | 'tech'>('languages')

  const copyUsername = () => {
    navigator.clipboard.writeText('curzz')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center p-4 sm:p-8 selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Subtle background glow */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial="hidden"
        animate="show"
        variants={containerVars}
        className="relative z-10 w-full max-w-[800px]"
      >
        
        {/* Main Profile Card */}
        <motion.div 
          variants={itemVars}
          className="bg-[#0f0f11]/90 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-14 text-center shadow-[0_0_60px_rgba(0,0,0,0.5)]"
        >
          
          {/* Avatar with smooth pulsing glow */}
          <motion.div 
            variants={itemVars}
            className="relative w-28 h-28 mx-auto mb-6 group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
            <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden bg-[#111]">
              {/* Using a placeholder dark aesthetic PFP. Replace the src with your actual image path later */}
              <img 
                src="https://i.pinimg.com/736x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Online Status Dot */}
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#050505] rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={itemVars}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            curzz
          </motion.h1>

          {/* Badges */}
          <motion.div 
            variants={itemVars}
            className="flex items-center justify-center gap-3 mb-8 text-sm"
          >
            <span className="text-blue-400 font-medium px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
              Professional Coder
            </span>
            <span className="text-emerald-400 font-medium px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Commissions: Open
            </span>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVars}
            className="text-[#a1a1aa] text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            I create a <strong className="text-white font-semibold">variety of custom software</strong>, including high-performance <strong className="text-white font-semibold">Discord bots, websites, and complex automation scripts</strong>.
            <br /><br />
            Browse my expertise below. If you need any tools, goods, or custom code, <strong className="text-white font-semibold">DM me directly (curzz)</strong> and we'll discuss the perfect solution and price.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVars}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href="https://discord.com/users/1153392848490737684"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(88,101,242,0.4)] hover:-translate-y-0.5"
            >
              <MessageSquare size={20} />
              Message on Discord
            </a>

            <button
              onClick={copyUsername}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} className="text-gray-400" />}
              {copied ? 'Copied to clipboard' : 'Copy Username'}
            </button>
          </motion.div>

          {/* ─── Skills Section ───────────────────────────────────────── */}
          <motion.div 
            variants={itemVars}
            className="text-left bg-[#050505]/50 rounded-[2rem] p-2 border border-white/5"
          >
            <div className="flex gap-2 p-2 mb-4 bg-white/5 rounded-2xl w-fit mx-auto sm:mx-0">
              <button
                onClick={() => setActiveTab('languages')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'languages'
                    ? 'bg-blue-500/20 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                    : 'text-[#888] hover:text-white hover:bg-white/5'
                }`}
              >
                Languages
              </button>
              <button
                onClick={() => setActiveTab('tech')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'tech'
                    ? 'bg-purple-500/20 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                    : 'text-[#888] hover:text-white hover:bg-white/5'
                }`}
              >
                Technologies
              </button>
            </div>

            <div className="p-4 sm:p-6 min-h-[280px]">
              <AnimatePresence mode="wait">
                {activeTab === 'languages' && (
                  <motion.div
                    key="languages"
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
                  >
                    {languages.map((lang, i) => (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        key={lang.name} 
                        className="flex items-center gap-3 bg-white/[0.02] hover:bg-white/[0.06] p-4 rounded-2xl border border-white/5 transition-colors cursor-default"
                      >
                        <span className="text-2xl drop-shadow-md">{lang.icon}</span>
                        <span className="text-zinc-200 font-medium text-sm sm:text-base">{lang.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'tech' && (
                  <motion.div
                    key="tech"
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
                  >
                    {technologies.map((tech, i) => (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        key={tech.name} 
                        className="flex items-center gap-3 bg-white/[0.02] hover:bg-white/[0.06] p-4 rounded-2xl border border-white/5 transition-colors cursor-default"
                      >
                        <span className="text-2xl drop-shadow-md">{tech.icon}</span>
                        <span className="text-zinc-200 font-medium text-sm sm:text-base">{tech.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
        </motion.div>
      </motion.div>
    </main>
  )
}
