"use client"

import { useRouter } from 'next/navigation'
import React, { useState, useRef } from 'react'
import { Search, Sparkles, ChevronRight } from 'lucide-react'

import HeroSection from './HeroSection'
import templates from '../(data)/template'

function MainSection() {

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const router = useRouter()
  const mainRef = useRef(null)

  const categories = ['All', ...new Set(templates.map((t) => t.category))]

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.desc.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === 'All' || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (

    <>
      <HeroSection />

      <div id='tools-section' className="bg-gradient-to-b from-cyan-50 to-white relative overflow-hidden min-h-screen">

        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-10 left-5 w-[500px] h-[500px] bg-gradient-to-br from-cyan-100/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-gradient-to-bl from-cyan-50/40 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-75/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Main layout section */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-1/4 space-y-10 sticky top-24 self-start h-fit">

              {/* Search Box */}
              <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-6 border border-cyan-100/50 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Search className="w-5 h-5 text-cyan-600" />
                  <h2 className="text-2xl font-bold text-cyan-700">Search</h2>
                </div>

                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-500" />
                  <input type="text" placeholder="Search template..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-white/80 border border-cyan-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-400 text-cyan-800 font-medium transition-all duration-200" />
                </div>
              </div>

              {/* Category List */}
              <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-6 border border-cyan-100/50 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-cyan-600" />
                  <h2 className="text-2xl font-bold text-cyan-700">Categories</h2>
                </div>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button key={cat} onClick={() => setSelectedCategory(cat)} className={`group flex items-center justify-between w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedCategory === cat ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white' : 'bg-white/70 text-cyan-800 hover:bg-white/90'}`}>
                      <span>{cat}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${selectedCategory === cat ? 'rotate-90 text-white' : 'text-cyan-400 group-hover:translate-x-1'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right Scrollable Section with Hidden Scrollbar */}
            <main ref={mainRef} className="w-full lg:w-3/4 max-h-[115vh] overflow-y-auto pr-1 scroll-smooth hide-scrollbar">
              <div className="mb-8 sticky top-0 bg-cyan-50/80 backdrop-blur-md z-10 py-4">
                <h2 className="text-4xl font-bold text-cyan-700 mb-1">Structured AI Templates</h2>
                <div className="flex items-center gap-2 text-cyan-600 text-base">
                  <div className="w-2 h-2 mt-0.5 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span>{filteredTemplates.length} Templates available</span>
                </div>
              </div>

              {filteredTemplates.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
                  {filteredTemplates.map((template) => (
                    <div key={template.slug} className="group bg-white/70 border border-cyan-100/60 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center shadow">
                          <img src={template.icon} alt={template.name} className="w-7 h-7 object-contain" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-cyan-800">{template.name}</h3>
                          <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-600 mt-1 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-cyan-700 text-sm mb-6 leading-relaxed">{template.desc}</p>
                      <button onClick={() => router.push(`/${template.slug}`)} className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-transform transform hover:scale-105">
                        Try Now
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center mt-24">
                  <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-full flex items-center justify-center shadow-lg">
                    <Search className="w-8 h-8 text-cyan-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-700 mb-2">No matching tools found</h3>
                  <p className="text-cyan-600/80 text-lg">Try adjusting your search or filter options</p>
                </div>
              )}
            </main>
          </div>
        </section>
      </div>

      {/* CSS to hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </>
  )
}

export default MainSection
