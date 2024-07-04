'use client'

import { ReactNode, useCallback, useEffect, useState } from 'react'

export default function StickyContainer({ children }: { children: ReactNode }) {
  const [isSticky, setIsSticky] = useState<boolean>(false)

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    scrollPosition >= 80 ? setIsSticky(true) : setIsSticky(false)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      data-sticky={isSticky}
      className="sticky top-0 z-50 row-span-1 w-full bg-background transition data-[sticky=false]:shadow-none data-[sticky=true]:shadow-lg"
    >
      {children}
    </div>
  )
}
