import { Badge } from '@/components/ui/badge'

export type ExperienceCardProps = {
  initialDate: string
  lastDate: string
  title: string
  description: string
  technologies: string[]
}

export default function ExperienceCard({
  title,
  description,
  initialDate,
  lastDate,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_auto] place-content-start place-items-start rounded-md p-6 transition hover:bg-background/20 hover:backdrop-blur-md md:gap-4 lg:grid-cols-[auto_auto] lg:grid-rows-1">
      {/* title */}
      <div className="col-span-1 row-span-1">
        <span className="text-center text-sm text-background">
          {initialDate} - {lastDate}
        </span>
      </div>
      {/* infos */}
      <div className="col-span-1 row-span-1 grid place-content-start place-items-start gap-3">
        <span className="text-lg font-semibold text-background">{title}</span>
        <p className="text-background">{description}</p>
        {/* techs */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              className="bg-background text-primary hover:bg-background"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
