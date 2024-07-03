import { ElementType } from 'react'

type CardProps = {
  title: string
  description: string
  icon: ElementType
}

export default function SkillCard({
  title,
  description,
  icon: Icon,
}: CardProps) {
  return (
    <div className="container col-span-1 flex h-min flex-col items-center justify-center gap-6 rounded-md border border-zinc-400 py-4 shadow-md transition duration-300 hover:scale-105 hover:border-primary hover:text-primary hover:shadow-primary">
      <div className="flex w-full items-center justify-start">
        <Icon className="mr-6 h-6 w-6 text-inherit lg:h-10 lg:w-10" />
        <span className="text-xl font-bold text-inherit lg:text-2xl">
          {title}
        </span>
      </div>
      <p className="text-justify text-base font-medium text-zinc-500 lg:text-lg">
        {description}
      </p>
    </div>
  )
}
