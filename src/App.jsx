import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PreciousImage from "./assets/image/Capture.PNG";
import Sample1 from "./assets/image/bird.jpg";
import Sample2 from "./assets/image/building.jpg";
import Sample3 from "./assets/image/italy.jpg";
import Sample4 from "./assets/image/lake.jpg";
import { useState } from "react";

const portfolioImages = [
  Sample1,
  Sample2,
  Sample3,
  Sample4,
];

const WorkflowCard = ({ title, children, delay = 0 }) => {
  const reduce = useReducedMotion();
  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={reduce ? {} : cardVariants}
      className="w-40 h-40 flex flex-col items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm shadow-md border border-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="p-3 bg-purple-50 rounded-lg mb-3">{children}</div>
      <div className="text-sm font-semibold text-gray-700">{title}</div>
    </motion.div>
  );
};

const PortfolioPage = () => {
  const reduce = useReducedMotion();

  const fadeUp = (d = 0) => ({
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d } },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5FF] via-[#F3E8FF] to-[#F9F7FF] text-gray-900">

      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-md border-b border-white/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a className="flex items-center gap-3" href="#">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center text-white font-bold">P</div>
            <span className="font-semibold">Precious</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#contact" className="text-sm hover:text-purple-600">Home</a>
            <a href="#about" className="text-sm hover:text-purple-600">About</a>
            <a href="#workflow" className="text-sm hover:text-purple-600">Workflow</a>
            <a href="#portfolio" className="text-sm hover:text-purple-600">Portfolio</a>
            <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 text-sm font-medium shadow">Contact</a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200">
            <span className="sr-only">Open menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </header>


      <main className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-8 items-center py-12">
          <motion.div initial="hidden" animate="show" variants={reduce ? {} : fadeUp(0.1)}>
            <p className="text-md text-black-900 font-medium">Hello, I'm Precious</p>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              UI &amp; UX <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">Designer</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">Passionate about creating user-friendly interfaces;<br></br> turning complex ideas into simple solutions.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-3 text-sm font-semibold shadow-lg">Contact me</a>
              <a href="#portfolio" className="inline-flex items-center rounded-full border border-purple-800 px-4 py-3 text-sm font-medium">View My work</a>
            </div>
          </motion.div>

          <motion.div className="flex justify-center lg:justify-end" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}>
            {/* Use a cutout profile image – put your image in public/assets */}
            <img src= {PreciousImage} alt="Precious smiling" className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl -mb-6" />
          </motion.div>
        </section>

        

        {/* ABOUT */}
        <section id="about">
          
          
          <motion.div  initial="hidden" whileInView="show" viewport={{ once: true }} variants={reduce ? {} : fadeUp(0.15)}>
            <h3 className="text-lg font-bold text-2xl text-gray-900 mb-6 gradient-underline text-center">About Me</h3>
            <div className="bg-white/60 rounded-2xl p-6 md:p-10 shadow-inner border border-white/40 grid lg:grid-cols-2 gap-8 items-center py-8">
              
              <motion.div className="flex justify-center lg:grid-cols-1 gap-8 items-center py-8" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}>
                {/* Use a cutout profile image – put your image in public/assets */}
                <img src= {PreciousImage} alt="Precious smiling" className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl -mb-6" />
              </motion.div >
              <div className="justify-center lg:grid-cols-1 gap-8 items-center py-8">
                <p className="mt-3 text-black-1000 font-semibold">I am a UI/UX designer who loves turning ideas into<br /> smooth intuitive experiences. <br /> I enjoy simplifying complex problems through design,<br /> making products easy to use.</p>
                <br />
                <div className="mt-4">
                  <a href="#contact" className="inline-flex items-center rounded-full bg-purple-500 text-white px-4 py-2 text-sm font-medium">Hire me</a>
                </div>
              </div>
            </div>
            
          </motion.div>
  
        </section>

        {/* WORKFLOW */}
        <section id="workflow" className="py-8">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-lg font-bold">My Workflow</motion.h2>

          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <WorkflowCard title="Research" delay={0.05}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="#6B21A8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" stroke="#6B21A8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </WorkflowCard>

            <WorkflowCard title="Wireframing" delay={0.12}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="14" rx="2" stroke="#6B21A8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 8h10M7 12h10" stroke="#6B21A8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </WorkflowCard>

            <WorkflowCard title="Prototyping" delay={0.18}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 20v-8" stroke="#6B21A8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 12h-8" stroke="#6B21A8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="#6B21A8" strokeWidth="1.2"/></svg>
            </WorkflowCard>

            <WorkflowCard title="Testing" delay={0.24}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#6B21A8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </WorkflowCard>

            <WorkflowCard title="Final Design" delay={0.30}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#6B21A8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </WorkflowCard>

          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="ml-2 items-center rounded-2xl bg-gradient-to-r from-purple-200 to-pink-200 text-white px-4 py-2 text-sm font-medium shadow">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-lg font-bold text-black">Portfolio</motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reduce ? {} : fadeUp(0.18)}>
              <h3 className="text-2xl font-bold text-black">UI/UX<br/><span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">Designs</span></h3>
              <p className="mt-3 text-gray-600 max-w-sm">Selected works focusing on product design, mobile-first flows, and pixel-perfect visual systems.</p>
              <div className="mt-6">
                <a href="#portfolio" className="inline-flex items-center rounded-full bg-purple-500 text-white px-4 py-2 text-sm font-medium">View My Work</a>
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {portfolioImages.map((src, i) => (
                <motion.div key={i} whileHover={{ scale: 1.03 }} className="rounded-xl overflow-hidden bg-white shadow-sm">
                  <img src={src} alt={`Project ${i + 1}`} className="w-full h-40 object-cover" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-10">
          <div className="max-w-xl mx-auto bg-white/60 rounded-2xl p-6 md:p-10 shadow-lg border border-white/40">
            <h3 className="text-xl font-semibold text-purple-700">Contact Me</h3>
            <p className="mt-2 text-gray-600">Interested in working together? Send a message and I’ll get back to you shortly.</p>
            
            <form 
              className="mt-6 grid gap-4"
              action="https://formspree.io/f/xvgbqwpd"
              method="POST"
            >

              <label className="sr-only" htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-transparent bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-200" required/>

              <label className="sr-only" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Message" className="px-4 py-3 rounded-lg border border-transparent bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-200" required></textarea>

              <div className="text-right">
                <button type="submit" className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 text-sm font-medium shadow">
                  {status === "sending" ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </section>

        <div className="py-12" />
      </main>

      <footer className="border-t border-white/60 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Precious — UI/UX Designer</div>
      </footer>

    </div>
  );
};

export default PortfolioPage;


