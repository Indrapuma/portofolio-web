import { Lock, FlaskConical, type LucideIcon } from "lucide-react"

interface ProjectPlaceholderProps {
  type: "confidential" | "research"
  title: string
  stack: string[]
}

const iconMap: Record<ProjectPlaceholderProps["type"], LucideIcon> = {
  confidential: Lock,
  research: FlaskConical,
}

const labelMap: Record<ProjectPlaceholderProps["type"], string> = {
  confidential: "Company Project",
  research: "Research Project",
}

const sublabelMap: Record<ProjectPlaceholderProps["type"], string> = {
  confidential: "Visual assets under NDA",
  research: "No public demo available",
}

export function ProjectPlaceholder({ type, title, stack }: ProjectPlaceholderProps) {
  const Icon = iconMap[type]
  const topSkills = stack.slice(0, 3)

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <Icon className="h-7 w-7 text-white/60" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">
            {labelMap[type]}
          </p>
          <p className="text-[10px] text-white/25">
            {sublabelMap[type]}
          </p>
        </div>

        <div className="flex gap-1.5 mt-1">
          {topSkills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] text-white/40 font-medium uppercase tracking-wider"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
