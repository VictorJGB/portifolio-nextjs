'use client'

import { ComponentProps } from 'react'
import { Button } from '../ui/button'

import { cn } from '@/lib/utils'

type linkProps = {
  text: string
  sectionID: string
}

export default function LinkButton({
  text,
  sectionID,
  className,
  ...props
}: linkProps & ComponentProps<'button'>) {
  function scrollTo(elementID: string) {
    const element = document.getElementById(elementID)
    if (element) {
      window.scroll({
        top: element.offsetTop - 80,
      })
    }
  }

  return (
    <Button
      className={cn(
        'bg-transparent text-base text-foreground transition hover:bg-transparent hover:text-primary',
        className,
      )}
      onClick={() => scrollTo(sectionID)}
      {...props}
    >
      {text}
    </Button>
  )
}
