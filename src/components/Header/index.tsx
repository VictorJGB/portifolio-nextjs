import Link from 'next/link'

import HeaderSheet from './header-sheet'
import LinkButton from './link-button'
import StickyContainer from './sticky-container'

export default function Header() {
  return (
    <StickyContainer>
      <header className="flex h-full w-full items-center justify-around bg-inherit">
        <Link href="#home">
          <h1 className="text-3xl font-bold text-foreground">Meu Portifólio</h1>
        </Link>
        <nav className="hidden items-center justify-center gap-3 text-base font-semibold lg:flex">
          <LinkButton text="Sobre mim" sectionID="about" />
          <LinkButton text="Habilidades" sectionID="skills" />
          <LinkButton text="Experiências" sectionID="experiences" />
          <LinkButton text="Projetos" sectionID="projects" />
        </nav>
        <HeaderSheet />
      </header>
    </StickyContainer>
  )
}
