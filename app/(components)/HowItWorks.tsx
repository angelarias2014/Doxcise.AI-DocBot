"use client"

import { motion } from "framer-motion"
import { Lightbulb, PencilLine, Rocket, Sparkles } from "lucide-react"

const steps = [
  {
    title: "Choose a Tool",
    description: "Pick from a wide range of AI tools — from content writing to code generation.",
    icon: <PencilLine className="w-8 h-8 text-cyan-600" />
  },
  {
    title: "Enter Your Input",
    description: "Provide a prompt or details specific to the tool you selected.",
    icon: <Lightbulb className="w-8 h-8 text-cyan-600" />
  },
  {
    title: "Let AI Work",
    description: "Our Gemini-powered engine processes your request in seconds.",
    icon: <Sparkles className="w-8 h-8 text-cyan-600" />
  },
  {
    title: "Get Instant Output",
    description: "Receive rich, editable results — ready to use or fine-tune.",
    icon: <Rocket className="w-8 h-8 text-cyan-600" />
  }
]

const HowItWorksSection = () => {

  return (

    <div>

      {/* Horizontal Stroke */}
      <div className="w-full border-t border-cyan-200" />

      {/* Section */}
      <section id="how-it-works" className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-800 mb-4"> How It Works </h2>
            <p className="text-cyan-600 text-lg max-w-2xl mx-auto">
              Experience the simplicity of AI — from your idea to intelligent output in just a few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.5 }} viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-6 shadow-md border border-cyan-100 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-2"> {step.title}</h3>
                <p className="text-cyan-700 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
    
  )
}

export default HowItWorksSection
