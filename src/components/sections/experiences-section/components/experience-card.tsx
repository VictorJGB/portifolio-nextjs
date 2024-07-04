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
    <div className="grid grid-cols-1 grid-rows-[auto_auto] place-content-start place-items-start rounded-md p-6 transition hover:bg-background/25 hover:backdrop-blur-md md:gap-2 lg:grid-cols-[auto_auto] lg:grid-rows-1">
      {/* title */}
      <div className="cols-span-1 row-span-1">
        <span className="text-background">
          {initialDate} - {lastDate}
        </span>
      </div>
      {/* infos */}
      <div className="cols-span-1 row-span-1">
        <span className="text-lg font-semibold text-background">{title}</span>
        <p>{description}</p>
        {/* techs */}
        <div>
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
