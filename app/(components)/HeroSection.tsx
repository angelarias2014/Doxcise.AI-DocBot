import React from 'react'
import { Rocket, Brain, Target, CircleArrowDown } from 'lucide-react'


function HeroSection() {

    const scrollToTools = () => {
        const toolsSection = document.getElementById('tools-section')
        toolsSection?.scrollIntoView({ behavior: 'smooth' })
    }

    return (

        <section className="relative w-full text-white py-16 px-6 overflow-hidden">

            {/* Subtle animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 animate-float"> <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div></div>
                <div className="absolute top-40 right-20 animate-float-delayed"><div className="w-3 h-3 bg-purple-400 rounded-full opacity-40"></div></div>
                <div className="absolute bottom-32 left-20 animate-float-slow"><div className="w-2 h-2 bg-blue-400 rounded-full opacity-50"></div></div>
                <div className="absolute top-60 right-40 animate-float"><div className="w-1 h-1 bg-cyan-300 rounded-full opacity-70"></div></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">

                {/* Status Badge */}
                <div className="mb-8 inline-flex items-center gap-2 px-6 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm animate-pulse-subtle">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <span className="text-sm text-cyan-300 font-medium">AI-Powered • Live</span>
                </div>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 text-cyan-400 drop-shadow-2xl animate-fadeInUp relative">Doxcise.<span className="text-white">AI</span></h1>

                <div className="text-xl sm:text-2xl max-w-4xl text-gray-300 mb-6  leading-relaxed font-semibold animate-fadeInUp delay-200">
                    Your <span className="text-cyan-400 font-bold relative"> one-stop AI platform
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                    </span> for generating content, code, emails, SEO snippets, and more
                </div>

                <p className="text-lg text-gray-200 max-w-3xl mb-12 font-semibold animate-fadeInUp delay-300">
                    Powered by intelligent prompts, crafted to save your time and amplify your creativity
                </p>

                <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp delay-400">

                    <button onClick={scrollToTools} className="group relative px-8 py-4 bg-cyan-500 text-black rounded-2xl font-bold hover:bg-cyan-400 transition-all duration-300 flex items-center gap-3 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative z-10 text-xl font-semibold">Start Exploring</span>
                        <CircleArrowDown className="relative z-10 w-5 h-5 mt-1 transition-transform" />
                    </button>

                    <button className="group px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-2xl font-bold hover:bg-cyan-400/10 hover:border-cyan-300 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                        <div className="absolute inset-0 bg-cyan-400/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        <span className="relative z-10">Watch Demo</span>
                    </button>

                </div>

                {/* Feature Icons */}
                <div className="flex gap-8 mt-16 animate-fadeInUp delay-500">
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                            <Rocket className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">Fast</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                            <Brain className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">Smart</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                            <Target className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">Precise</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection