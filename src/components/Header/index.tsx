import Link from 'next/link'

import HeaderSheet from './header-sheet'
import StickyContainer from './sticky-container'

export default function Header() {
  return (
    <StickyContainer>
      <header className="flex h-full w-full items-center justify-around bg-inherit">
        <Link href="#home">
          <h1 className="text-3xl font-bold text-foreground">Meu Portifólio</h1>
        </Link>
        <nav className="hidden items-center justify-center gap-3 text-base font-semibold lg:flex">
          <Link href="#about" className="transition hover:text-primary">
            Sobre mim
          </Link>
          <Link href="#skills" className="transition hover:text-primary">
            Habilidades
          </Link>
          <Link href="#experiences" className="transition hover:text-primary">
            Experiências
          </Link>
          <Link href="#projects" className="transition hover:text-primary">
            Projetos
          </Link>
        </nav>
        <HeaderSheet />
      </header>
    </StickyContainer>
  )
}
