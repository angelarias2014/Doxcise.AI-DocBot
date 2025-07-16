"use client"

import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const SlugHeader = () => {

  const router = useRouter()

  return (

    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/5 border-b border-cyan-500/20 shadow-md">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:justify-start gap-6">
        
        {/* Back Icon */}
        <button onClick={() => router.back()} className="p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-400/30 transition" title="Go back"> <ArrowLeft className="h-5 w-5 text-cyan-300" /> </button>

        {/* Logo & Brand */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-cyan-400 tracking-wide"> Doxcise.AI </span>
        </div>
      </div>

    </header>
  )
}

export default SlugHeader
