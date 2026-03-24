"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

interface Slide {
  id: number
  title: string
  titleAccent: string
  subtitle: string
  description: string
  stats: { value: string; label: string }[]
  cta: string
  ctaLink: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Transformación",
    titleAccent: "Digital",
    subtitle: "Soluciones tecnológicas integrales",
    description: "Consultoría TIC, desarrollo de software e integración IT para impulsar tu negocio al siguiente nivel.",
    stats: [
      { value: "100%", label: "Compromiso" },
      { value: "24/7", label: "Soporte Técnico" },
      { value: "Global", label: "Cobertura" },
    ],
    cta: "Explorar Servicios",
    ctaLink: "/#servicios",
  },
  {
    id: 2,
    title: "Business",
    titleAccent: "Intelligence",
    subtitle: "Decisiones basadas en datos",
    description: "Cuadros de mando, analítica avanzada y visión 360° de tu negocio para decisiones estratégicas.",
    stats: [
      { value: "360°", label: "Visión Completa" },
      { value: "BI", label: "Analytics Pro" },
      { value: "ETL", label: "Integración" },
    ],
    cta: "Ver Soluciones BI",
    ctaLink: "/#servicios",
  },
  {
    id: 3,
    title: "Gestión de",
    titleAccent: "Procesos",
    subtitle: "Digitalización y Control Total",
    description: "Optimizamos tu operativa diaria con soluciones de gestión documental, CRM y automatización de tareas.",
    stats: [
      { value: "100%", label: "Digital" },
      { value: "ETL", label: "Integración" },
      { value: "CRM", label: "Gestión" },
    ],
    cta: "Optimizar Negocio",
    ctaLink: "/#servicios",
  },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const getSlidePosition = (index: number) => {
    const diff = index - currentIndex
    const normalizedDiff = ((diff + slides.length) % slides.length)
    
    if (normalizedDiff === 0) return "center"
    if (normalizedDiff === 1) return "right"
    if (normalizedDiff === slides.length - 1) return "left"
    return "hidden"
  }

  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#050505] to-transparent" />
      
      {/* Red Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e63946]/8 blur-[150px] rounded-full" />

      {/* 3D Carousel Container */}
      <div className="relative flex flex-col items-center justify-center pt-32 pb-8" style={{ perspective: '1500px' }}>
        
        {/* Cards Container */}
        <div className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[450px]" style={{ transformStyle: 'preserve-3d' }}>
          {slides.map((slide, index) => {
            const position = getSlidePosition(index)
            
            let transform = ''
            let opacity = 0
            let zIndex = 0
            let pointerEvents: 'auto' | 'none' = 'none'
            
            if (position === 'center') {
              transform = 'translateX(-50%) translateZ(0) rotateY(0deg) scale(1)'
              opacity = 1
              zIndex = 30
              pointerEvents = 'auto'
            } else if (position === 'left') {
              transform = 'translateX(-130%) translateZ(-250px) rotateY(25deg) scale(0.75)'
              opacity = 0.5
              zIndex = 20
            } else if (position === 'right') {
              transform = 'translateX(30%) translateZ(-250px) rotateY(-25deg) scale(0.75)'
              opacity = 0.5
              zIndex = 20
            } else {
              transform = 'translateX(-50%) translateZ(-400px) scale(0.5)'
              opacity = 0
              zIndex = 10
            }
            
            return (
              <div
                key={slide.id}
                className="absolute left-1/2 top-0 transition-all duration-700 ease-out w-[85%] md:w-[70%] lg:w-[55%] max-w-2xl"
                style={{
                  transform,
                  opacity,
                  zIndex,
                  pointerEvents,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Card */}
                <div 
                  className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#111] via-[#0a0a0a] to-[#050505]"
                  style={{
                    boxShadow: position === 'center' 
                      ? '0 50px 100px -20px rgba(0,0,0,0.9), 0 0 60px rgba(230,57,70,0.15), inset 0 1px 0 rgba(255,255,255,0.05)'
                      : '0 30px 60px -20px rgba(0,0,0,0.7)'
                  }}
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e63946] to-transparent" />
                  
                  {/* Content */}
                  <div className="relative p-5 md:p-7 lg:p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#e63946]/10 border border-[#e63946]/30 flex items-center justify-center">
                          <span className="text-[#e63946] font-bold text-sm">B</span>
                        </div>
                        <span className="text-white/60 text-xs font-medium">BOLDR Technologies</span>
                      </div>
                      <div className="text-white/30 font-mono text-xs">
                        0{slide.id} <span className="text-white/10">/</span> 0{slides.length}
                      </div>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-2">
                      {slide.title}{" "}
                      <span className="text-[#e63946]">{slide.titleAccent}</span>
                    </h1>
                    
                    <p className="text-base md:text-lg text-white/80 font-medium mb-1">
                      {slide.subtitle}
                    </p>
                    
                    <p className="text-xs md:text-sm text-white/50 max-w-lg mb-5 leading-relaxed">
                      {slide.description}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <Button
                        asChild
                        className="bg-[#e63946] hover:bg-[#d62839] text-white font-semibold px-5 h-9 rounded-full text-xs"
                      >
                        <Link href={slide.ctaLink}>
                          {slide.cta}
                          <ArrowRight className="ml-2 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/5 hover:border-white/30 px-5 h-9 rounded-full text-xs bg-transparent"
                      >
                        <Link href="/#contacto">
                          <Play className="mr-2 h-3 w-3 fill-current" />
                          Ver Demo
                        </Link>
                      </Button>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-5 md:gap-8 pt-4 border-t border-white/10">
                      {slide.stats.map((stat, i) => (
                        <div key={i}>
                          <p className="text-lg md:text-xl font-bold text-white">{stat.value}</p>
                          <p className="text-[10px] md:text-xs text-white/40">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation - Below Cards */}
        <div className="mt-4 flex items-center justify-center gap-3 z-40">
          <style>{`
            .nav-round-btn {
              background: linear-gradient(135deg, rgba(180,30,40,0.45) 0%, rgba(20,8,8,0.9) 60%, rgba(10,5,5,0.98) 100%);
              border: 1px solid rgba(230,57,70,0.25);
              box-shadow: 0 0 14px rgba(230,57,70,0.15);
              transition: box-shadow 0.3s ease, border-color 0.3s ease, color 0.2s ease;
              width: 44px;
              height: 44px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              color: rgba(255,255,255,0.7);
            }
            .nav-round-btn:hover {
              border-color: rgba(230,57,70,0.55);
              box-shadow: 0 0 20px rgba(230,57,70,0.35);
              color: rgba(255,255,255,1);
            }
          `}</style>

          <button
            className="nav-round-btn"
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            aria-label="Anterior"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="nav-round-btn"
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            aria-label="Siguiente"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  )
}
