import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

import Link from 'next/link'

import Image from 'next/image'
import { Button } from '../ui/button'

export default function HomeSection() {
  return (
    <div
      id="home"
      className="container col-span-1 row-span-1 flex flex-col items-center justify-center py-5 md:py-0"
    >
      <div className="flex h-full w-full flex-col items-center justify-around md:flex-row">
        {/* info container */}
        <div className="flex flex-1 flex-col items-center justify-center gap-2 md:w-1/2 md:items-start md:justify-start">
          <h1 className="text-center text-3xl font-bold text-foreground md:text-start lg:text-heading-1">
            Seja bem vindo(a), me chamo {<br />}{' '}
            <strong className="text-primary">Victor Jerrysson</strong>
          </h1>
          <h2 className="text-xl font-semibold text-primary lg:text-heading-2">
            Desenvolvedor Front-end
          </h2>
          <p className="font-regular text-center text-zinc-500 md:text-start">
            Sou apaixonado por tecnologia e como ela conecta as pessoas pelo
            mundo.
          </p>
          <div className="my-5 flex w-full items-center justify-center gap-3 md:justify-start">
            {/* github */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    target="_blank"
                    className="rounded-full bg-primary p-2"
                    href="https://github.com/VictorJGB"
                  >
                    <Github className="h-5 w-5 text-background" />
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
                    className="rounded-full bg-primary p-2"
                    href="https://www.linkedin.com/in/jerry-dev-084793203"
                  >
                    <Linkedin className="h-5 w-5 text-background" />
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
                  <Link
                    target="_blank"
                    className="rounded-full bg-primary p-2"
                    href="mailto:victorgb.dev@gmail.com"
                  >
                    <Mail className="h-5 w-5 text-background" />
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
                  <Link
                    target="_blank"
                    className="rounded-full bg-primary p-2"
                    href="https://instagram.com/_jerryGB"
                  >
                    <Instagram className="h-5 w-5 text-background" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>@_jerrygb</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex w-full items-center justify-center md:items-start md:justify-start">
            <Button
              asChild
              className="rounded-full border border-primary text-base hover:bg-background hover:text-primary"
            >
              <a
                href={'/sections/home/curriculo_dev.pdf'}
                download="cv_victor_jerrysson"
              >
                Baixar Currículo
              </a>
            </Button>
          </div>
        </div>
        {/* image container */}
        <div className="flex w-2/3 flex-col items-center justify-center md:w-1/2">
          <Image
            className="max-w-full"
            src={'/sections/home/profile.png'}
            alt="Imagem de perfil"
            width={600}
            height={600}
          />
        </div>
        <Image
          className="absolute bottom-1 left-1/2 hidden mix-blend-multiply md:flex"
          src={'/sections/home/scrolling_mousewheel.gif'}
          alt="mouse_gif"
          width={100}
          height={100}
          unoptimized
        />
      </div>
    </div>
  )
}
