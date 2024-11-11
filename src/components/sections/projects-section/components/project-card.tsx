import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Project from '@/types/project'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Props = Project

export function ProjectCard({ description, image, title, link, techs }: Props) {
  return (
    <Link
      href={link}
      target="_blank"
      className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
    >
      <Card className="bg-black transition hover:bg-black/90">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-primary">
            {title}
            <ExternalLink className="h-4 w-4 text-primary-foreground" />
          </CardTitle>
          <CardDescription className="text-primary-foreground">
            {description}
          </CardDescription>
          <div className="flex w-full items-center justify-start gap-2 py-1">
            {techs.map((tech, index) => {
              return (
                <Image
                  key={index}
                  className="h-7 w-7"
                  width={200}
                  height={200}
                  alt=""
                  src={tech}
                />
              )
            })}
          </div>
        </CardHeader>
        <CardContent className="h-60">
          <Image
            className="h-full rounded border border-primary"
            width={500}
            height={500}
            alt=""
            src={image}
          />
        </CardContent>
      </Card>
    </Link>
  )
}
