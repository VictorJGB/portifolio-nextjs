import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollTo(elementID: string) {
  const element = document.getElementById(elementID)
  if (element) {
    window.scroll({
      top: element.offsetTop - 80,
    })
  }
}
