'use client'

import { useState, useEffect } from 'react'

const languages = [
  { name: 'JavaScript', icon: '🟨', color: '#F7DF1E', level: 95 },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6', level: 92 },
  { name: 'Python', icon: '🐍', color: '#3776AB', level: 88 },
  { name: 'Rust', icon: '🦀', color: '#CE422B', level: 72 },
  { name: 'Go', icon: '🐹', color: '#00ADD8', level: 75 },
  { name: 'C++', icon: '⚡', color: '#00599C', level: 70 },
  { name: 'HTML/CSS', icon: '🌐', color: '#E34F26', level: 98 },
  { name: 'SQL', icon: '🗄️', color: '#336791', level: 85 },
]

const technologies = [
  { name: 'Next.js', icon: '▲' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Discord.js', icon: '🤖' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Prisma', icon: '💎' },
  { name: 'TailwindCSS', icon: '🎨' },
  { name: 'Redis', icon: '🔴' },
  { name: 'GraphQL', icon: '🔮' },
  { name: 'AWS', icon: '☁️' },
]

const services = [
  { title: 'Discord Bots', desc: 'Custom bots with moderation, economy, games, tickets — fully hosted', icon: '🤖', color: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-500/30' },
  { title: 'Web Development', desc: 'Modern, fast websites and web apps built with Next.js & React', icon: '🌐', color: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30' },
  { title: 'Automation Scripts', desc: 'Python/Node scripts to automate any repetitive task or workflow', icon: '⚙️', color: 'from-green-500/20 to-teal-500/20', border: 'border-green-500/30' },
  { title: 'APIs & Backends', desc: 'RESTful APIs, databases, authentication — production-ready', icon: '🔧', color: 'from-orange-500/20 to-red-500/20', border: 'border-orange-500/30' },
]

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'languages' | 'tech'>('languages')

  const copyUsername = () => {
    navigator.clipboard.writeText('curzservice')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-600/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 md:py-24">

        {/* ─── Profile Card ─────────────────────────────────────────── */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-6 text-center pulse-glow">
          {/* Avatar */}
          <div className="float inline-block mb-6">
            <div className="relative w-28 h-28 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5">
                <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center">
                  <span className="text-4xl font-bold gradient-text">Z</span>
                </div>
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            curzservice
          </h1>

          {/* Badges */}
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <span className="text-blue-400 text-sm font-medium">Professional Developer</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/15 text-green-400 border border-green-500/30">
              ● Commissions: Open
            </span>
          </div>

          {/* Bio */}
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            I build <strong className="text-white">Discord bots</strong>, <strong className="text-white">websites</strong>,
            and <strong className="text-white">automation tools</strong> — fast, clean, and production-ready.
            Browse my skills below and DM me to discuss your project.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="https://discord.com/users/1153392848490737684"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.136 18.113a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Discord
            </a>

            <button
              onClick={copyUsername}
              className="flex items-center gap-2.5 px-6 py-3 rounded-2xl glass border border-white/10 text-zinc-300 hover:text-white font-semibold transition-all duration-200 hover:scale-105 hover:border-white/20"
            >
              {copied ? (
                <><span className="text-green-400">✓</span> Copied!</>
              ) : (
                <><span>@</span> curzservice</>
              )}
            </button>
          </div>
        </div>

        {/* ─── Skills Section ───────────────────────────────────────── */}
        <div className="glass rounded-3xl p-8 mb-6">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 p-1 bg-white/5 rounded-2xl w-fit">
            <button
              onClick={() => setActiveTab('languages')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'languages'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'tech'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Technologies
            </button>
          </div>

          {activeTab === 'languages' && (
            <div className="space-y-4">
              {languages.map((lang, i) => (
                <div key={lang.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.icon}</span>
                      <span className="text-white font-medium">{lang.name}</span>
                    </div>
                    <span className="text-zinc-500 text-sm font-mono">{lang.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${lang.level}%`,
                        background: `linear-gradient(90deg, ${lang.color}99, ${lang.color})`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-200 cursor-default"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-zinc-400 text-xs font-medium text-center leading-tight">{tech.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ─── Services Section ─────────────────────────────────────── */}
        <div className="glass rounded-3xl p-8 mb-6">
          <h2 className="text-xl font-bold text-white mb-6">What I Build</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className={`card-hover p-5 rounded-2xl bg-gradient-to-br ${service.color} border ${service.border}`}
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-white font-semibold mb-1">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── CTA Section ──────────────────────────────────────────── */}
        <div className="glass rounded-3xl p-8 text-center">
          <div className="text-4xl mb-4">💬</div>
          <h2 className="text-2xl font-bold text-white mb-3">Got a Project in Mind?</h2>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            DM me on Discord and we&apos;ll discuss what you need,
            timeline, and price. Fast turnaround, clean code.
          </p>
          <a
            href="https://discord.com/users/1153392848490737684"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.136 18.113a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
            Message me on Discord
          </a>
          <p className="text-zinc-600 text-sm mt-4">@curzservice · Usually responds within a few hours</p>
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-700 text-sm mt-8">
          © 2026 curzservice · Built with Next.js
        </p>
      </div>
    </main>
  )
}
