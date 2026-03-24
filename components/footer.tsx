import Link from "next/link"
import Image from "next/image"

const services = [
  "Consultoría TIC",
  "Desarrollo Software",
  "Business Intelligence",
  "Ciberseguridad",
  "Infraestructuras TIC",
]

const technologies = [
  "Big Data",
  "IoT",
  "Cloud Computing",
  "Smart Cities",
  "Machine Learning",
]

export function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <Image
                src="/logo.svg"
                alt="BOLDR Technologies"
                width={32}
                height={32}
                className="h-7 w-auto"
              />
              <span className="font-bold text-lg text-white">
                BOLDR<span className="text-[#e63946]">.</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Transformación digital para empresas. Soluciones tecnológicas innovadoras que impulsan tu negocio.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {["in", "tw", "fb"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all text-xs font-medium"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[#e63946] mb-5">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/#servicios"
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[#e63946] mb-5">Tecnologías</h3>
            <ul className="space-y-3" id="tecnologias">
              {technologies.map((tech) => (
                <li key={tech}>
                  <span className="text-white/40 text-sm">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[#e63946] mb-5">Contacto</h3>
            <ul className="space-y-3 text-white/40 text-sm">
              <li>info@boldr-tech.com</li>
              <li>+34 900 000 000</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} BOLDR Technologies. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/equipo" className="text-white/40 hover:text-white text-sm transition-colors">
              Equipo
            </Link>
            <Link href="/#servicios" className="text-white/40 hover:text-white text-sm transition-colors">
              Servicios
            </Link>
            <Link href="/#contacto" className="text-white/40 hover:text-white text-sm transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
