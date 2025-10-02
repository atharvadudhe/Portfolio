"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#projects", label: "Projects" },
    { href: "#connect", label: "Connect" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-[#6C9EFF] hover:text-[#A18FF3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C9EFF] rounded-md px-2"
            aria-label="Home"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#6B7280] hover:text-[#6C9EFF] transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C9EFF] rounded-md px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#6B7280] hover:text-[#6C9EFF] transition-colors font-medium px-2 py-2 rounded-md hover:bg-[#6C9EFF]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C9EFF]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
