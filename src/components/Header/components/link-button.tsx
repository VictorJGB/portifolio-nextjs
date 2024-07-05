'use client'

import { ComponentProps, ReactNode } from 'react'
import { Button } from '../../ui/button'

import { cn } from '@/lib/utils'

type linkProps = {
  sectionID: string
  isSheetButton: boolean
  children: ReactNode
}

export default function LinkButton({
  sectionID,
  className,
  children,
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
      onClick={() => scrollTo(sectionID)}
      className={cn(
        'bg-transparent text-base text-foreground transition hover:bg-transparent hover:text-primary',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
