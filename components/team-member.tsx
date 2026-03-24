import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"

interface TeamMemberProps {
  member: {
    id: string
    name: string
    role: string
    bio: string
    skills: string[]
    linkedin?: string
    email?: string
    photo?: string
  }
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#e63946]/30 transition-all duration-300">
      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e63946]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#e63946]/10 border border-[#e63946]/20 flex items-center justify-center mb-5">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              width={80}
              height={80}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <span className="text-2xl font-bold text-[#e63946]">
              {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#e63946] transition-colors">
            {member.name}
          </h3>
          <p className="text-[#e63946] font-medium text-sm">{member.role}</p>
        </div>

        <p className="text-white/40 text-sm leading-relaxed mb-5">
          {member.bio}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6 width: ">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-white/[0.03] text-white/60 text-xs font-medium rounded-full border border-white/[0.05]"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2 pt-5 border-t border-white/[0.05]">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white/50 hover:text-[#e63946] hover:border-[#e63946]/30 hover:bg-[#e63946]/10 transition-all"
              aria-label={`LinkedIn de ${member.name}`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white/50 hover:text-[#e63946] hover:border-[#e63946]/30 hover:bg-[#e63946]/10 transition-all"
              aria-label={`Email de ${member.name}`}
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
