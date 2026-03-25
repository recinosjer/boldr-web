"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Gracias por contactarnos. Te responderemos pronto.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#050505] relative">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Red Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e63946]/5 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[#e63946] font-semibold tracking-widest text-xs uppercase mb-4 px-4 py-2 bg-[#e63946]/10 rounded-full border border-[#e63946]/20">
            <span className="w-2 h-2 rounded-full bg-[#e63946]" />
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Hablemos de tu <span className="text-[#e63946]">proyecto</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la mejor solución tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Información de contacto
              </h3>
              <p className="text-white/40 leading-relaxed">
                Estamos aquí para ayudarte. Ponte en contacto y te responderemos lo antes posible.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="p-3 rounded-lg bg-[#e63946]/10">
                  <Mail className="w-5 h-5 text-[#e63946]" />
                </div>
                <div>
                  <p className="text-white/40 text-sm">Email</p>
                  <p className="text-white font-medium">info@boldr.com.es</p>
                </div>
              </div>


              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="p-3 rounded-lg bg-[#e63946]/10">
                  <MapPin className="w-5 h-5 text-[#e63946]" />
                </div>
                <div>
                  <p className="text-white/40 text-sm">Ubicación</p>
                  <p className="text-white font-medium">Santander, España</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
                    Nombre *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    required
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/30 focus:border-[#e63946]/50 focus:ring-[#e63946]/20 h-12"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    required
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/30 focus:border-[#e63946]/50 focus:ring-[#e63946]/20 h-12"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/60 mb-2">
                  Empresa
                </label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Nombre de tu empresa"
                  className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/30 focus:border-[#e63946]/50 focus:ring-[#e63946]/20 h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={5}
                  required
                  className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/30 focus:border-[#e63946]/50 focus:ring-[#e63946]/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#e63946] hover:bg-[#d62839] text-white font-semibold h-12 rounded-full"
              >
                Enviar mensaje
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
