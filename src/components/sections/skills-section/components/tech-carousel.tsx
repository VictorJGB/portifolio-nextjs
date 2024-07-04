'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

import { ComponentProps } from 'react'
import TechCard, { techCardProps } from './tech-card'

const techData: techCardProps[] = [
  {
    icon: '/sections/skills/nextjs.svg',
    title: 'NextJS',
    link: 'https://nextjs.org/',
  },
  {
    icon: '/sections/skills/angular.svg',
    title: 'Angular',
    link: 'https://angular.dev/',
  },
  {
    icon: '/sections/skills/react.svg',
    title: 'React',
    link: 'https://react.dev/',
  },
  {
    icon: '/sections/skills/react.svg',
    title: 'React Native',
    link: 'https://reactnative.dev/',
  },
  {
    icon: '/sections/skills/flutter.svg',
    title: 'Flutter',
    link: 'https://flutter.dev/',
  },
  {
    icon: '/sections/skills/typescript.svg',
    title: 'Typescript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    icon: '/sections/skills/tailwindcss.svg',
    title: 'TailwindCSS',
    link: 'https://tailwindcss.com/',
  },
  {
    icon: '/sections/skills/shadcnui.svg',
    title: 'Shadcn UI',
    link: 'https://ui.shadcn.com/',
  },
  {
    icon: '/sections/skills/react-hook-form.svg',
    title: 'React Hook Form',
    link: 'https://www.react-hook-form.com/',
  },
  {
    icon: '/sections/skills/zod.svg',
    title: 'Zod',
    link: 'https://zod.dev/',
  },
  {
    icon: '/sections/skills/eslint.svg',
    title: 'Eslint',
    link: 'https://eslint.org/',
  },
]

export default function TechCarousel({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <Carousel
      className={className}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
        slidesToScroll: 'auto',
        dragFree: true,
      }}
      {...props}
    >
      <CarouselContent>
        {techData.map((tech: techCardProps, index) => {
          return (
            <CarouselItem className="basis-full p-0 sm:basis-1/2" key={index}>
              <TechCard {...tech} />
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}
