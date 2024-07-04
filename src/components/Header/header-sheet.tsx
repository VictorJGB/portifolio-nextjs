'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Github, Instagram, LinkIcon, Linkedin, Mail, Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Separator } from '../ui/separator'

export default function HeaderSheet() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex lg:hidden" asChild>
        <Button variant="outline" className="border-[1.5px]">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent onCloseAutoFocus={(event) => event.preventDefault()}>
        <SheetHeader>
          <SheetTitle>
            <span className="text-center text-xl font-bold sm:text-3xl">
              Meu portifólio
            </span>
          </SheetTitle>
          <SheetDescription>
            Navegue pelo portifólio através dos links abaixo
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-2" />
        <div className="grid gap-4 py-4">
          {/* about me */}
          <SheetClose asChild>
            <Button
              variant={'outline'}
              className="border-[1.5px] border-primary text-primary"
              asChild
            >
              <Link href="#about" className="text-foreground">
                <LinkIcon className="mr-4 h-4 w-4" />
                Sobre mim
              </Link>
            </Button>
          </SheetClose>
          {/* skills */}
          <SheetClose asChild>
            <Button
              variant={'outline'}
              className="border-[1.5px] border-primary text-primary"
              asChild
            >
              <Link href="#skills">
                <LinkIcon className="mr-4 h-4 w-4" />
                Habilidades
              </Link>
            </Button>
          </SheetClose>
          {/* experiences */}
          <SheetClose asChild>
            <Button
              variant={'outline'}
              className="border-[1.5px] border-primary text-primary"
              asChild
            >
              <Link href="#experiences" className="text-foreground">
                <LinkIcon className="mr-4 h-4 w-4" />
                Experiências
              </Link>
            </Button>
          </SheetClose>
          {/* projects */}
          <SheetClose asChild>
            <Button
              variant={'outline'}
              className="border-[1.5px] border-primary text-primary"
              asChild
            >
              <Link href="#projects" className="text-foreground">
                <LinkIcon className="mr-4 h-4 w-4" />
                Projetos
              </Link>
            </Button>
          </SheetClose>
        </div>
        <Separator className="my-3" />
        <SheetFooter>
          <div className="mt-4 flex w-full items-center justify-center gap-3">
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
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
