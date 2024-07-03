import { cn } from '@/lib/utils'
import { ComponentProps, ElementType } from 'react'

type CardProps = {
  title: string
  description: string
  icon: ElementType
}

export default function SkillCard({
  title,
  description,
  icon: Icon,
  className,
  ...props
}: CardProps & ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'container flex flex-col items-center justify-around gap-4 rounded-md border border-zinc-400 py-4 shadow-md transition duration-300 hover:scale-105 hover:border-primary hover:text-primary hover:shadow-primary lg:gap-6',
        className,
      )}
      {...props}
    >
      <div className="flex w-full items-center justify-start">
        <Icon className="mr-6 h-5 w-5 text-inherit md:h-6 md:w-6 lg:h-8 lg:w-8" />
        <span className="text-base font-bold text-inherit md:text-xl lg:text-2xl">
          {title}
        </span>
      </div>
      <p className="text-justify text-sm font-medium text-zinc-500 md:text-base lg:text-lg">
        {description}
      </p>
    </div>
  )
}
