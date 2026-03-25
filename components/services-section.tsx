import { Globe, BarChart3, Cog, Users, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

const serviceCategories = [
  {
    icon: Globe,
    title: "Web & Presencia Digital / Business Intelligence",
    services: [
      {
        name: "Web corporativa para tu negocio",
        description: "Una web como escaparate de tu negocio, que podrás gestionar de forma completamente autónoma.",
        category: "Web & Presencia Digital",
      },
      {
        name: "Business Data Service",
        description: "Solución de Business Intelligence para el acceso unificado y centralizado a toda la información de tu negocio.",
        category: "Business Intelligence",
      },
      {
        name: "Cuadros de mando 360°",
        description: "Implantación de cuadros de mando específicos que agrupen tus datos para dar soporte a las decisiones de tu negocio.",
        category: "Business Intelligence",
      },
    ],
    icons: [Globe, BarChart3],
  },
  {
    icon: Cog,
    title: "Gestión de Procesos",
    services: [
      {
        name: "Digitalización documental",
        description: "Solución avanzada para procesar, digitalizar, clasificar y organizar la documentación de tu organización.",
        category: "",
      },
      {
        name: "Integración Global ETL",
        description: "Captura datos de diferentes fuentes, transfórmalos y cárgalos en un sistema centralizado para analítica.",
        category: "",
      },
      {
        name: "Gestión de tareas y tickets",
        description: "Gestiona el ciclo de vida completo de tareas y tickets asociados a elementos de trabajo.",
        category: "",
      },
    ],
    icons: [Cog],
  },
  {
    icon: Users,
    title: "Gestión de Clientes (CRM)",
    services: [
      {
        name: "Relaciones comerciales",
        description: "Control efectivo de todas las actividades realizadas para aumentar la rentabilidad de tu acción comercial.",
        category: "",
      },
      {
        name: "Atención al cliente",
        description: "Aumenta la satisfacción de tus clientes gestionando todas las solicitudes de forma proactiva y eficaz.",
        category: "",
      },
      {
        name: "Gestión de marketing",
        description: "Optimiza tus campañas de Marketing realizando un seguimiento y analizando el impacto en ventas.",
        category: "",
      },
    ],
    icons: [Users],
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    services: [
      {
        name: "Seguridad básica y avanzada",
        description: "Servicio de ciberseguridad para proteger los dispositivos y datos de tu empresa.",
        category: "",
      },
    ],
    icons: [Shield],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-[#080808] relative">
      <style>{`
        .service-card {
          border: 1px solid rgba(230,57,70,0.35) !important;
          box-shadow: 0 0 18px rgba(230,57,70,0.25), 0 0 40px rgba(230,57,70,0.08);
          transition: box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .service-card:hover {
          border-color: rgba(230,57,70,0.65) !important;
          box-shadow: 0 0 24px rgba(230,57,70,0.45), 0 0 60px rgba(230,57,70,0.15);
        }
      `}</style>
      {/* Background Elements */}
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
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 text-[#e63946] font-semibold tracking-widest text-xs uppercase mb-4 px-4 py-2 bg-[#e63946]/10 rounded-full border border-[#e63946]/20">
            <span className="w-2 h-2 rounded-full bg-[#e63946]" />
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Soluciones que impulsan <br className="hidden md:block" />
            <span className="text-[#e63946]">tu negocio</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ofrecemos servicios TIC diseñados para la transformación digital de tu empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12 md:space-y-16">
          {serviceCategories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.title}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="flex items-center gap-2">
                    {category.icons.map((IconItem, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#e63946]/10 border border-[#e63946]/20">
                        <IconItem className="w-5 h-5 text-[#e63946]" />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#e8e0d0]">{category.title}</h3>
                </div>

                {/* Services Cards */}
                <div className={`grid gap-4 md:gap-6 ${
                  category.services.length === 1
                    ? "grid-cols-1"
                    : category.services.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}>
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="group relative p-6 rounded-2xl bg-[#0e0e0e] transition-all duration-300 cursor-pointer service-card"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0" />
                      <div className="relative flex flex-col h-full">
                        {service.category && (
                          <span className="inline-block self-start text-[10px] font-semibold uppercase tracking-widest text-[#e63946]/70 border border-[#e63946]/15 px-2 py-0.5 rounded-full mb-3">
                            {service.category}
                          </span>
                        )}
                        <h4 className="text-base font-bold text-white mb-3 leading-snug">
                          {service.name}
                        </h4>
                        <p className="text-white/45 text-sm leading-relaxed flex-1">
                          {service.description}
                        </p>
                        <div className="mt-5 flex justify-end">
                          <ArrowRight className="w-4 h-4 text-transparent group-hover:text-[#e63946] group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <Link 
            href="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#e63946] hover:bg-[#d62839] text-white font-semibold rounded-full transition-colors"
          >
            Solicitar presupuesto
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
