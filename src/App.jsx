import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, ArrowRight, Sun, Moon, ExternalLink, Terminal } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { portfolioData } from "./data/portfolio";
export default function Portfolio() {
  const [dark, setDark] = useState(portfolioData.defaultDarkMode ?? false);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);



  // Sync document body background color with dark mode
  useEffect(() => {
    if (dark) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [dark]);

  return (
    <div className={`w-full min-h-screen ${dark ? "bg-black text-white" : "bg-white text-black"} transition-all duration-700 font-sans`}>

      <div className="fixed top-0 left-0 right-0 w-full flex justify-between items-center px-4 md:px-10 py-4 md:py-5 backdrop-blur-2xl z-50 overflow-hidden box-border">
        <div className="flex-1 min-w-0 pr-2 sm:pr-4">
          <h1 className="font-semibold text-sm md:text-lg truncate w-full">{portfolioData.name}</h1>
        </div>
        <div className="flex items-center justify-end gap-2 sm:gap-6 md:gap-8 text-[11px] sm:text-xs md:text-sm shrink-0 whitespace-nowrap">
          <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-gray-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
          <button onClick={() => setDark(!dark)} className="p-2 shrink-0 rounded-full backdrop-blur-md bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 border border-gray-300/50 dark:border-gray-700/50 transition-all ml-1">
            {dark ? <Sun size={14} className="sm:w-4 sm:h-4" /> : <Moon size={14} className="sm:w-4 sm:h-4" />}
          </button>
        </div>
      </div>

      {/* HERO (FAANG STYLE) */}
      <section ref={ref} className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

        <motion.div style={{ y, scale }} className="absolute w-[800px] h-[800px] bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-3xl opacity-20" />

        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-7xl md:text-9xl font-semibold tracking-tight">
          {portfolioData.heroTitle}
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 text-xl text-gray-500 max-w-xl">
          {portfolioData.heroSubtitle}
        </motion.p>

        <div className="mt-10 flex gap-4">
          <a href="#projects"><Button>View Work <ArrowRight className="ml-2" /></Button></a>
        </div>
      </section>

      {/* IMPACT SECTION (FAANG STYLE) */}
      <section className="py-32 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {portfolioData.impactItems.map((item, i) => (
          <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }}>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="mt-4 text-gray-500 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </section>

      {/* PROJECT STORY (FAANG STYLE) */}
      <section id="projects" className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-semibold mb-20">Selected Work</h2>

          {portfolioData.projects.map((p, i) => (
            <motion.div key={i} className="mb-20 grid md:grid-cols-2 gap-10 items-center" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 60 }}>
              <div>
                <h3 className="text-3xl font-semibold">{p.title}</h3>
                <p className={`mt-4 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                  {p.description}
                </p>
                {p.whyItMatters && (
                  <div className="mt-4 text-sm">
                    <p className={`font-semibold ${dark ? "text-gray-300" : "text-gray-700"}`}>Why this project matters:</p>
                    <p className={`mt-1 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                      {p.whyItMatters}
                    </p>
                  </div>
                )}
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <Button className="mt-6">Explore Project</Button>
                </a>
              </div>

              <div className={`h-64 rounded-3xl bg-gradient-to-br shadow-inner relative overflow-hidden ${dark ? "from-gray-800 to-gray-900 border border-gray-800" : "from-gray-200 to-gray-300"}`}>
                {p.image && (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover absolute top-0 left-0" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* API DEMO SECTION */}
      {portfolioData.apiDemo && (
        <section className="py-40 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Live API
              </div>
              <h2 className="text-5xl font-semibold">{portfolioData.apiDemo.title}</h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">{portfolioData.apiDemo.description}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              className={`rounded-2xl border overflow-hidden ${dark ? "bg-gray-900/50 border-gray-800" : "bg-gray-50 border-gray-200"}`}
            >
              {/* Terminal-style header */}
              <div className={`flex items-center gap-3 px-5 py-3 border-b ${dark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-100"}`}>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Terminal size={12} />
                  <span>API Endpoints</span>
                </div>
              </div>

              {/* Endpoint list */}
              <div className="p-4 space-y-3">
                {portfolioData.apiDemo.endpoints.map((ep, i) => (
                  <motion.div
                    key={i}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${dark ? "hover:bg-gray-800/60" : "hover:bg-gray-100"}`}
                  >
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono tracking-wide ${
                      ep.method === "GET"
                        ? "bg-blue-500/15 text-blue-400"
                        : ep.method === "POST"
                        ? "bg-green-500/15 text-green-400"
                        : ep.method === "PUT"
                        ? "bg-yellow-500/15 text-yellow-400"
                        : "bg-red-500/15 text-red-400"
                    }`}>
                      {ep.method}
                    </span>
                    <code className={`text-sm font-mono ${dark ? "text-gray-300" : "text-gray-700"}`}>{ep.path}</code>
                    <span className="text-xs text-gray-500 ml-auto hidden sm:block">{ep.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <div className="text-center mt-10">
              <a href={portfolioData.apiDemo.link} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  Open Swagger Docs <ExternalLink size={16} />
                </Button>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* SKILLS */}
      <section id="skills" className="py-32 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-10">Core Stack</h2>
        <div className="flex flex-wrap gap-4">
          {portfolioData.skills.map((s, i) => (
            <motion.span key={i} whileHover={{ scale: 1.15 }} className="px-6 py-3 bg-gray-200/20 backdrop-blur rounded-full">
              {s}
            </motion.span>
          ))}
        </div>
      </section>

      {/* SKILLS FLOW */}
      <section className="py-10 overflow-hidden select-none relative flex items-center">
        {/* Base Layer: Dim text */}
        <motion.div
          key={`base-${portfolioData.skillsScrollSpeed}`}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: portfolioData.skillsScrollSpeed || 40, ease: "linear" }}
          className={`whitespace-nowrap text-4xl md:text-6xl font-black flex items-center w-max ${dark ? "text-gray-800" : "text-gray-200"}`}
        >
          {[...portfolioData.skills, ...portfolioData.skills, ...portfolioData.skills, ...portfolioData.skills].map((skill, i) => (
            <span key={`${skill}-${i}`} className="mx-8 hover:text-blue-500 transition-colors duration-300">
              {skill} <span className="mx-8 text-gray-500">&bull;</span>
            </span>
          ))}
        </motion.div>

        {/* Glowing Overlay Layer (Visible only in the center of the screen) */}
        <div
          className="absolute inset-0 pointer-events-none flex items-center overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, transparent 35%, black 45%, black 55%, transparent 65%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 35%, black 45%, black 55%, transparent 65%, transparent 100%)"
          }}
        >
          <motion.div
            key={`overlay-${portfolioData.skillsScrollSpeed}`}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: portfolioData.skillsScrollSpeed || 40, ease: "linear" }}
            className="whitespace-nowrap text-4xl md:text-6xl font-black flex items-center w-max text-blue-500"
            style={{ textShadow: "0px 0px 20px rgba(59,130,246,0.8)" }}
          >
            {[...portfolioData.skills, ...portfolioData.skills, ...portfolioData.skills, ...portfolioData.skills].map((skill, i) => (
              <span key={`overlay-${skill}-${i}`} className="mx-8">
                {skill} <span className="mx-8 text-blue-500/50">&bull;</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 bg-black text-white text-center px-6">
        <h2 className="text-5xl font-semibold">Let’s Build the Future</h2>
        <p className="mt-6 text-gray-400">{portfolioData.contactSubtitle}</p>

        <div className="mt-10 flex justify-center gap-8">
          <a href={portfolioData.githubLink}><Github size={30} /></a>
          <a href={portfolioData.linkedinLink}><Linkedin size={30} /></a>
          <a href={portfolioData.emailLink}><Mail size={30} /></a>
        </div>
      </section>

    </div>
  );
}