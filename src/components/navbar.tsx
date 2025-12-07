"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#escuela", label: "Escuela" },
  { href: "#horarios", label: "Horarios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#profesor", label: "Profesor" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1614]/95 backdrop-blur-sm border-b border-[#3a3230]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#8b1a1a] flex items-center justify-center">
              <span className="text-white font-bold text-lg">少</span>
            </div>
            <span className="font-serif font-bold text-lg text-[#faf8f5] hidden sm:block">Shaolin Kung-Fu</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#a09080] hover:text-[#c9a227] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild className="bg-[#8b1a1a] hover:bg-[#a82828] text-white">
              <a href="https://wa.me/34634220377" target="_blank" rel="noopener noreferrer">
                Reservar clase
              </a>
            </Button>
          </div>

          <button className="lg:hidden p-2 text-[#faf8f5]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#1a1614] border-b border-[#3a3230]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-base font-medium text-[#a09080] hover:text-[#c9a227] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full mt-4 bg-[#8b1a1a] hover:bg-[#a82828] text-white">
              <a href="https://wa.me/34634220377" target="_blank" rel="noopener noreferrer">
                Reservar clase
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
