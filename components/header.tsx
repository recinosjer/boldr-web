"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Tecnologías", href: "/#tecnologias" },
  { label: "Equipo", href: "/equipo" },
  { label: "Contacto", href: "/#contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#0a0a0a]/95 backdrop-blur-md" 
          : "bg-[#0a0a0a]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/logo.svg"
              alt="BOLDR Technologies"
              width={88}
              height={88}
              loading="eager"
              priority
              className="h-[88px] w-auto"
            />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xl tracking-wide text-white">
                BOLDR
              </span>
              <span className="text-gray-400 font-normal text-sm tracking-wide">
                Technology<span className="text-[#e63946]">.</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#e63946] hover:bg-[#d62839] text-white font-semibold px-7 h-11 rounded-full text-sm"
            >
              <Link href="/#contacto">Empezar Proyecto</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Bottom red line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#e63946]/50 to-transparent" />

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#e63946] hover:bg-[#d62839] text-white font-semibold rounded-full mt-4"
            >
              <Link href="/#contacto" onClick={() => setIsMenuOpen(false)}>
                Empezar Proyecto
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
