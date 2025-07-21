"use client"

import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"

import UsageTrack from "../(components)/UsageTrack" 


//  Navigation links for both desktop and mobile
const navLinks = [
  { label: "Home", href: "/" },
  { label: "History", href: "/history" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "#how-it-works" }
]

const Header: React.FC = () => {

  const router = useRouter()
  const pathname = usePathname()

  const { isSignedIn } = useUser()

  const [showMenu, setShowMenu] = useState(false)
  const [activeLink, setActiveLink] = useState<string>(pathname)


  // Update active link on route change.
  useEffect(() => {
    setActiveLink(pathname)
  }, [pathname])


  // Handles link click.
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setActiveLink(href)
      }
    } else {
      router.push(href)
    }
    setShowMenu(false)
  }

  return (

    <nav className="w-full z-50 sticky top-0 bg-transparent">
      <div className="max-w-7xl mx-auto mt-4 px-6 py-3 bg-blue-500/30 backdrop-blur-xl border border-cyan-500 rounded-xl shadow-lg flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer select-none">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="text-3xl font-extrabold text-cyan-400 tracking-wide">Doxcise.AI</span>
        </div>

        {/* Desktop Nav + Usage */}
        <div className="hidden md:flex items-center space-x-10 text-white font-semibold tracking-wide">
          {/* Nav Links */}
          <ul className="flex space-x-10">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`cursor-pointer transition hover:text-cyan-300 ${
                  (pathname === link.href || activeLink === link.href) ? "text-cyan-300" : ""
                }`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </li>
            ))}
          </ul>

          {/* Usage */}
          <div className="ml-10">
            <UsageTrack />
          </div>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex space-x-4 items-center">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <>
              <SignInButton>
                <button className="w-20 h-10 bg-cyan-500 text-black font-semibold rounded-md shadow-lg hover:bg-cyan-400 transition">Login</button>
              </SignInButton>
              <SignUpButton>
                <button className="w-28 h-10 border border-cyan-500 text-cyan-500 font-semibold rounded-md hover:bg-cyan-500 hover:text-black transition">Get Started</button>
              </SignUpButton>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {showMenu && (
        <div className="md:hidden bg-blue-500/30 backdrop-blur-xl border border-cyan-500 rounded-xl shadow-lg mx-6 mt-2 py-4 px-4 space-y-4 text-white font-medium tracking-wide">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className={`cursor-pointer hover:text-cyan-300 ${
                (pathname === link.href || activeLink === link.href) ? "text-cyan-300" : ""
              }`}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </div>
          ))}

          <div className="pt-4 border-t border-cyan-400/30">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton>
                  <button className="w-full mt-2 h-10 bg-cyan-500 text-black font-semibold rounded-md shadow hover:bg-cyan-400 transition">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="w-full mt-2 h-10 border border-cyan-500 text-cyan-500 font-semibold rounded-md hover:bg-cyan-500 hover:text-black transition">
                    Get Started
                  </button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
