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
    <div>
      {/* title */}
      <div>
        <span>
          {initialDate} - {lastDate}
        </span>
      </div>
      {/* infos */}
      <div>
        <span>{title}</span>
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
