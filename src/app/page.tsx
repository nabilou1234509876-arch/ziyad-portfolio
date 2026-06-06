"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Terminal,
  Code2,
  Gamepad2,
  ShieldAlert,
  Cpu,
  Box,
  MessageSquare,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: "Roblox Game Automation",
    description:
      "Advanced Luau and Python scripts for auto-farming, market sniping, data scraping, and seamless game automation at scale.",
    tech: ["Luau", "Python", "WebSockets"],
    icon: Terminal,
  },
  {
    title: "Anti-Cheat / Security",
    description:
      "Server-side Roblox anti-exploit systems detecting speedhacks, flight, and unauthorized remote event fires.",
    tech: ["Roblox Studio", "Luau"],
    icon: ShieldAlert,
  },
  {
    title: "Discord-to-Roblox Bridges",
    description:
      "Two-way communication bots linking Discord servers directly to Roblox game servers for live moderation and economy syncing.",
    tech: ["TypeScript", "Node.js", "Express"],
    icon: Cpu,
  },
  {
    title: "Custom Dashboards",
    description:
      "Modern web interfaces for managing your game metrics, viewing real-time statistics, and configuring external modules.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    icon: Box,
  },
];

const SKILLS = [
  "Luau",
  "Python",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Discord.js",
  "MongoDB",
  "PostgreSQL",
  "C++",
  "C#",
];

// ─── Animations ──────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Components ──────────────────────────────────────────────────────────────

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasEntered, setHasEntered] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
    // Exactly 3 seconds of raw 4K drop before content shows up
    setTimeout(() => {
      setShowContent(true);
    }, 3000);
  };

  return (
    <>
      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black cursor-pointer overflow-hidden"
            onClick={handleEnter}
          >
            {/* Cinematic pulsing effect */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px]"
            />

            <div className="flex flex-col items-center gap-6 text-white hover:scale-110 transition-transform duration-500 relative z-10">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <Play className="ml-2" size={40} fill="currentColor" />
              </div>
              <p className="tracking-[0.3em] font-light uppercase text-sm text-zinc-300 drop-shadow-lg">
                Click to enter
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative min-h-screen bg-[#050505] overflow-hidden selection:bg-red-500/30 selection:text-white text-zinc-100 font-sans">
        {/* ─── Cinematic Video Background ─── */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-black">
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-in-out ${
              hasEntered && !showContent
                ? "opacity-100 blur-0 scale-100 brightness-110" // The clear 4K 3-second drop
                : showContent
                  ? "opacity-30 blur-[8px] scale-[1.03] brightness-50" // Blurs into the background
                  : "opacity-0"
            }`}
            src="/edit.mp4?v=4"
            loop
            playsInline
            muted={false}
          />

          {/* Overlays to make text readable */}
          <div
            className={`absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505] transition-opacity duration-[2000ms] ${showContent ? "opacity-100" : "opacity-0"}`}
          />
          <div
            className={`absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}
          />

          {/* Interactive Mouse Glow */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${showContent ? "opacity-100" : "opacity-0"}`}
            style={{
              background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 38, 38, 0.08), transparent 40%)`,
            }}
          />
        </div>

        {/* ─── Main Content ─── */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              {/* ─── Hero Section ─── */}
              <section className="min-h-screen flex flex-col justify-center pt-20 pb-10">
                <div className="container mx-auto px-6 md:px-12">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="max-w-4xl"
                  >
                    <motion.div
                      variants={fadeUp}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-8 backdrop-blur-md"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        Available for work
                      </span>
                    </motion.div>

                    <motion.h1
                      variants={fadeUp}
                      className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white mb-6 uppercase leading-none drop-shadow-2xl"
                    >
                      CURZ
                    </motion.h1>

                    <motion.h2
                      variants={fadeUp}
                      className="text-2xl md:text-4xl text-zinc-300 font-medium mb-8 tracking-tight drop-shadow-lg"
                    >
                      Roblox Developer <span className="text-red-500">&</span>{" "}
                      Automation Engineer
                    </motion.h2>

                    <motion.p
                      variants={fadeUp}
                      className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-14 leading-relaxed font-light drop-shadow-md"
                    >
                      Specializing in high-performance Luau scripting, external
                      web-to-game integrations, Discord bots, and advanced game
                      automation.
                    </motion.p>

                    <motion.div
                      variants={fadeUp}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
                    >
                      <a
                        href="https://discord.com/users/1153392848490737684"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex items-center justify-center gap-3 bg-red-600 text-white px-10 py-5 rounded-full font-bold transition-all duration-300 w-full sm:w-auto overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                      >
                        Contact on Discord{" "}
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1.5"
                        />
                      </a>
                      <a
                        href="#projects"
                        className="group flex items-center justify-center gap-3 bg-black/50 backdrop-blur-xl border border-zinc-800 text-zinc-300 px-10 py-5 rounded-full font-semibold hover:bg-white/5 hover:text-white transition-all duration-300 w-full sm:w-auto hover:border-zinc-600"
                      >
                        View Projects
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </section>

              {/* ─── Projects Section ─── */}
              <section
                id="projects"
                className="py-32 bg-[#050505]/80 backdrop-blur-2xl border-t border-zinc-900/80"
              >
                <div className="container mx-auto px-6 md:px-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 max-w-2xl"
                  >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
                      Systems & Tools
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                      A collection of my premium Roblox integrations, security
                      systems, and automation software.
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {PROJECTS.map((project, i) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          duration: 0.7,
                          delay: i * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        whileHover={{
                          y: -8,
                          transition: { duration: 0.3, ease: "easeOut" },
                        }}
                        className="group rounded-[2rem] bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm border border-zinc-800 hover:border-red-500/50 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(220,38,38,0.15)]"
                      >
                        <div className="p-10 flex flex-col h-full">
                          <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-8 border border-red-500/20 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-500">
                            <project.icon size={32} className="text-red-400" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-4 tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-zinc-400 mb-10 leading-relaxed font-light text-lg flex-grow">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="px-4 py-2 bg-black text-zinc-300 text-sm font-medium rounded-lg border border-zinc-800"
                              >
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

              {/* ─── Tech Stack Marquee ─── */}
              <section className="py-24 border-y border-zinc-900/80 bg-black/50 overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

                <div className="flex w-[200%] animate-[marquee_20s_linear_infinite]">
                  <div className="flex w-1/2 justify-around items-center">
                    {SKILLS.map((skill, i) => (
                      <span
                        key={i}
                        className="text-3xl md:text-5xl font-black uppercase text-zinc-800 tracking-widest hover:text-zinc-600 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex w-1/2 justify-around items-center">
                    {SKILLS.map((skill, i) => (
                      <span
                        key={`duplicate-${i}`}
                        className="text-3xl md:text-5xl font-black uppercase text-zinc-800 tracking-widest hover:text-zinc-600 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─── Footer CTA ─── */}
              <section className="py-32 relative text-center">
                <div className="container mx-auto px-6 md:px-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto"
                  >
                    <Gamepad2
                      size={64}
                      className="mx-auto text-zinc-800 mb-8"
                    />
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                      Let's Build.
                    </h2>
                    <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
                      Ready to take your Roblox game or Discord community to the
                      next level?
                    </p>
                    <a
                      href="https://discord.com/users/1153392848490737684"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-zinc-200 transition-all duration-300 hover:scale-105"
                    >
                      <MessageSquare size={20} /> DM on Discord
                    </a>
                  </motion.div>
                </div>
              </section>

              <footer className="py-8 text-center bg-black">
                <p className="text-zinc-600 text-sm font-medium tracking-wide">
                  © {new Date().getFullYear()} CURZ. All rights reserved.
                </p>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `,
          }}
        />
      </main>
    </>
  );
}
