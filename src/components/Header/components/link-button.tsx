'use client'

import { ComponentProps, ReactNode } from 'react'
import { Button } from '../../ui/button'

import { cn, scrollTo } from '@/lib/utils'

type linkProps = {
  sectionID: string
  children: ReactNode
}

export default function LinkButton({
  sectionID,
  className,
  children,
  ...props
}: linkProps & ComponentProps<'button'>) {
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
