'use client'

import { useState } from 'react'

const languages = [
  { name: 'JavaScript', icon: '🟨', color: '#F7DF1E', level: 95 },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6', level: 92 },
  { name: 'Python', icon: '🐍', color: '#3776AB', level: 88 },
  { name: 'HTML/CSS', icon: '🌐', color: '#E34F26', level: 98 },
]

const technologies = [
  { name: 'Next.js', icon: '▲' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Discord.js', icon: '🤖' },
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
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        
        {/* Main Profile Card - Exact match to screenshot */}
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-8 md:p-12 text-center shadow-2xl">
          
          {/* Avatar */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700 to-black p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                <span className="text-3xl font-bold text-white">C</span>
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            curzservice
          </h1>

          {/* Badges */}
          <div className="flex items-center justify-center gap-3 mb-6 text-sm font-medium">
            <span className="text-[#3b82f6]">Professional Coder</span>
            <span className="px-3 py-1 rounded-full bg-[#064e3b]/40 text-[#34d399]">
              Commissions: Open
            </span>
          </div>

          {/* Description */}
          <p className="text-[#a1a1aa] text-base leading-relaxed max-w-lg mx-auto mb-8">
            I create a <strong className="text-white font-semibold">variety of custom bots</strong>, such as custom <strong className="text-white font-semibold">Discord bots, websites, and automation scripts</strong>.
            <br /><br />
            Browse my skills below and contact me by clicking the Discord link below to join my server or <strong className="text-white font-semibold">DM me directly (curzservice)</strong> to discuss a price.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
            <a
              href="https://discord.com/users/1153392848490737684"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1a1a1a] hover:bg-[#222222] border border-white/10 text-white font-medium transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.136 18.113a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Discord
            </a>

            <button
              onClick={copyUsername}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1a1a1a] hover:bg-[#222222] border border-white/10 text-white font-medium transition-colors"
            >
              {copied ? '✓ Copied' : '💬 Copy Username'}
            </button>
          </div>

          {/* ─── Skills Section Mini ───────────────────────────────────────── */}
          <div className="text-left bg-[#0a0a0a] rounded-2xl p-6 border border-white/5">
            <div className="flex gap-4 mb-6 border-b border-white/10 pb-2">
              <button
                onClick={() => setActiveTab('languages')}
                className={`text-sm font-medium pb-2 -mb-[9px] ${
                  activeTab === 'languages'
                    ? 'text-white border-b-2 border-[#3b82f6]'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
              >
                Languages
              </button>
              <button
                onClick={() => setActiveTab('tech')}
                className={`text-sm font-medium pb-2 -mb-[9px] ${
                  activeTab === 'tech'
                    ? 'text-white border-b-2 border-[#3b82f6]'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
              >
                Technologies
              </button>
            </div>

            {activeTab === 'languages' && (
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-3 bg-[#111111] p-3 rounded-xl border border-white/5">
                    <span className="text-xl">{lang.icon}</span>
                    <span className="text-white font-medium text-sm">{lang.name}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'tech' && (
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3 bg-[#111111] p-3 rounded-xl border border-white/5">
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-white font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
        </div>
      </div>
    </main>
  )
}
