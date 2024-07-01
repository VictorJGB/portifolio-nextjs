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
    <div className="col-span-1 row-span-1 flex items-center justify-around">
      {/* info container */}
      <div className="flex flex-1 flex-col items-start justify-center gap-2 md:w-1/2">
        <h1 className="text-start text-3xl font-bold text-foreground">
          Seja bem vindo(a), me chamo {<br />}{' '}
          <strong className="text-primary">Victor Jerrysson</strong>
        </h1>
        <h2 className="text-xl font-semibold text-primary">
          Desenvolvedor Front-end
        </h2>
        <p className="font-regular text-start text-zinc-500">
          Sou apaixonado por tecnologia e como ela conecta as pessoas pelo
          mundo.
        </p>
        <div className="my-2 flex w-full items-center justify-start gap-3">
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
        <div className="h-full w-full items-center justify-center">
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
      <div className="flex w-full flex-col items-center justify-center md:w-1/2">
        <Image
          className="max-w-full"
          src={'/sections/home/profile.png'}
          alt="Imagem de perfil"
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}
