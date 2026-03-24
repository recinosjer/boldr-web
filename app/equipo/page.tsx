import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamMember } from "@/components/team-member"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    id: "miembro-1",
    name: "José Recinos",
    role: "CEO & Fundador",
    bio: "Profesional con más de 4 años de experiencia en el sector tecnológico. Especialista en transformación digital y estrategia empresarial.",
    skills: ["Estrategia Digital", "Liderazgo", "Innovación", "Desarrollo Web", "APIs", "Integración","Machine Learning"],
    linkedin: "#",
    email: "jose.recinos@boldr.com.es",
    photo: "/jose-recinos.jpg",
  },
  {
    id: "miembro-2",
    name: "José Rodríguez",
    role: "Director de Ciberseguridad",
    bio: "Experto en seguridad informática, especialista en arquitecturas de software y desarrollo de soluciones",
    skills: ["Ciberseguridad", "Arquitectura Software", "Cloud Computing", "DevOps","APIs", "Desarrollo Backend","Machine Learning"],
    linkedin: "#",
    email: "jose.rodriguez@boldr.com.es",
    photo: "/jose-rodriguez.jpg",
  },
  {
    id: "miembro-3",
    name: "Diego Barraza",
    role: "Director de Business Intelligence",
    bio: "Especialista en análisis de datos y Business Intelligence. Experiencia en implementación de soluciones de Big Data y analítica avanzada.",
    skills: ["Business Intelligence", "Desarrollo Backend", "APIs", "Big Data","Machine Learning","Integración de base de datos"],
    linkedin: "#",
    email: "diego.barraza@boldr.com.es",
    photo: "/diego-barraza.jpg",
  },
  {
    id: "miembro-4",
    name: "Sergio Mayen",
    role: "Director de Desarrollo Backend",
    bio: "Experto en desarrollo backend con certificaciones internacionales. Especializado en arquitecturas escalables y optimización de rendimiento.",
    skills: ["Desarrollo Backend", "Arquitectura Software", "Gestion de Datos", "Integración de APIs"],
    linkedin: "#",
    email: "sergio.mayen@boldr.com.es",
    photo: "/sergio-mayen.jpg",
  },
  {
    id: "miembro-5",
    name: "Alejandro González",
    role: "Director de Desarrollo Frontend",
    bio: "Desarrollador full-stack con amplia experiencia en proyectos de integración y desarrollo de software a medida.",
    skills: ["Desarrollo Web", "Gestión de Proyectos",  "APIs", "Integración","Optimización de Rendimiento"],
    linkedin: "#",
    email: "alejandro.gonzalez@boldr.com.es",
    photo: "/alejandro-gonzalez.jpg",
  },
]

export default function EquipoPage() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        
        {/* Red Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#e63946]/5 blur-[150px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-flex items-center gap-2 text-[#e63946] font-semibold tracking-widest text-xs uppercase mb-4 px-4 py-2 bg-[#e63946]/10 rounded-full border border-[#e63946]/20">
            <span className="w-2 h-2 rounded-full bg-[#e63946]" />
            Nuestro Equipo
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            El equipo detrás de <span className="text-[#e63946]">BOLDR</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Un grupo de profesionales apasionados por la tecnología, comprometidos con impulsar la transformación digital de tu empresa.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-28 bg-[#080808] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#050505] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
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
        
        {/* Red Glow */}
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#e63946]/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            ¿Quieres trabajar <span className="text-[#e63946]">con nosotros</span>?
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            Estamos siempre buscando talento. Si te apasiona la tecnología, ponte en contacto con nosotros.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#e63946] hover:bg-[#d62839] text-white font-semibold rounded-full transition-colors"
          >
            Contáctanos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
