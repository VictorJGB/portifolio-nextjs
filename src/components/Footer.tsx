import Link from 'next/link'

import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

export default function Footer() {
  return (
    <footer className="row-span-1 flex w-full items-center justify-around bg-black py-4">
      {/* links */}
      <div className="flex h-full flex-col items-start justify-start">
        <h2 className="text-start text-xl font-bold text-primary">Links</h2>
        <nav className="flex flex-col items-start justify-start">
          <Link
            href="#home"
            className="text-base text-background hover:text-accent"
          >
            Inicio
          </Link>
          <Link
            href="#about"
            className="text-base text-background hover:text-accent"
          >
            Sobre mim
          </Link>
          <Link
            href="#skills"
            className="text-base text-background hover:text-accent"
          >
            Habilidades
          </Link>
          <Link
            href="#projects"
            className="text-base text-background hover:text-accent"
          >
            Projetos
          </Link>
        </nav>
      </div>

      {/* contact */}
      <div className="flex h-full flex-col items-start justify-start gap-3">
        <h2 className="text-start text-xl font-bold text-primary">
          Contate-me
        </h2>
        <div className="flex items-center justify-start gap-2">
          <Phone className="h-4 w-4 text-base text-background" />
          <span className="text-base text-background">
            +55 (88) 9 96248-8942
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          {/* github */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link target="_blank" href="https://github.com/VictorJGB">
                  <Github className="h-5 w-5 text-background hover:text-primary" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* linkedin */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/jerry-dev-084793203"
                >
                  <Linkedin className="h-5 w-5 text-background hover:text-primary" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Linkedin</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* mail */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link target="_blank" href="mailto:victorgb.dev@gmail.com">
                  <Mail className="h-5 w-5 text-background hover:text-primary" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>victorgb.dev@gmail.com</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* instagram */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link target="_blank" href="https://instagram.com/_jerryGB">
                  <Instagram className="h-5 w-5 text-background hover:text-primary" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>@_jerrygb</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </footer>
  )
}
