import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, ArrowRight, Sun, Moon } from "lucide-react";
import { useState, useRef } from "react";
import { portfolioData } from "./data/portfolio";
export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [result, setResult] = useState(null);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const handleFakeAPI = () => {
    const responses = ["Low Risk", "Moderate", "High Risk"];
    setResult(responses[Math.floor(Math.random() * responses.length)]);
  };

  return (
    <div className={`w-full min-h-screen ${dark ? "bg-black text-white" : "bg-white text-black"} transition-all duration-700 font-sans`}>

      <div className="fixed top-0 w-full flex justify-between items-center px-10 py-5 backdrop-blur-2xl z-50">
        <h1 className="font-semibold text-lg">{portfolioData.name}</h1>
        <div className="flex gap-8 text-sm items-center">
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          <button onClick={() => setDark(!dark)} className="p-2 ml-4 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 border transition-all">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
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
      <section id="projects" className="py-40 px-6 bg-gradient-to-b from-transparent to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-semibold mb-20">Selected Work</h2>

          {portfolioData.projects.map((p, i) => (
            <motion.div key={i} className="mb-20 grid md:grid-cols-2 gap-10 items-center" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 60 }}>
              <div>
                <h3 className="text-3xl font-semibold">{p.title}</h3>
                <p className="mt-4 text-gray-500">
                  {p.description}
                </p>
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <Button className="mt-6">Explore Project</Button>
                </a>
              </div>

              <div className="h-64 rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-inner" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ML DEMO (REAL FEEL) */}
      <section className="py-40 px-6 text-center">
        <h2 className="text-5xl font-semibold">Live ML System</h2>
        <p className="mt-4 text-gray-500">Simulating real-time prediction API</p>

        <div className="mt-12 flex flex-col items-center gap-6">
          <Button onClick={handleFakeAPI}>Run Prediction</Button>
          {result && (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-2xl">
              {result}
            </motion.div>
          )}
        </div>
      </section>

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
      <section className="py-10 overflow-hidden select-none">
        <div className="flex w-full relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className={`whitespace-nowrap text-4xl md:text-6xl font-black flex items-center ${dark ? "text-gray-800" : "text-gray-200"}`}
          >
            {[...portfolioData.skills, ...portfolioData.skills, ...portfolioData.skills, ...portfolioData.skills].map((skill, i) => (
              <span key={i} className="mx-8 hover:text-blue-500 transition-colors duration-300">
                {skill} <span className="mx-8">&bull;</span>
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