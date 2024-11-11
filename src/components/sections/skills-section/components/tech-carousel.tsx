'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

import { techData } from '@/data/techs'
import { ComponentProps } from 'react'
import TechCard, { techCardProps } from './tech-card'

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
