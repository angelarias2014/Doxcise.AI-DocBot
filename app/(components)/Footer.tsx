"use client"

import React from "react"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-b from-cyan-900 via-cyan-950 to-black text-white px-6 py-16 overflow-hidden ">

      {/* Floating subtle background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-16 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-float opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        
        {/* Logo & Tagline */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-cyan-300 mb-3 tracking-tight">
          Doxcise.<span className="text-white">AI</span>
        </h1>
        <p className="text-cyan-200 text-lg max-w-xl mx-auto mb-8">
          Empowering creativity & productivity through intelligent AI assistance.
        </p>

        {/* Social & Links */}
        <div className="flex justify-center items-center gap-6 mb-10">
          <a href="https://github.com/aashish-mitt96" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/ashish-mittal-184b61313/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:aashishrbmittal@gmail.com" className="hover:text-cyan-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 via-white/20 to-cyan-400 mx-auto mb-6 opacity-60"></div>

        {/* Bottom Note */}
        <p className="text-sm text-cyan-200 flex items-center justify-center gap-1 text-center">
          Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> by{" "}
          <span className="font-semibold text-white">Ashish Mittal</span> — Blending code & creativity for smarter solutions.
        </p>

      </div>
    </footer>
  )
}

export default FooterSection
