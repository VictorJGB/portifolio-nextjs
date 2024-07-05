import HeaderSheet from './components/header-sheet'
import LinkButton from './components/link-button'
import StickyContainer from './layout/sticky-container'

export default function Header() {
  return (
    <StickyContainer>
      <header className="flex h-full w-full items-center justify-around bg-inherit">
        <LinkButton sectionID="home">
          <h1 className="text-3xl font-bold text-foreground">Meu Portifólio</h1>
        </LinkButton>
        <nav className="hidden items-center justify-center gap-3 text-base font-semibold lg:flex">
          <LinkButton sectionID="about">Sobre mim</LinkButton>
          <LinkButton sectionID="about">Habilidades</LinkButton>
          <LinkButton sectionID="about">Experiências</LinkButton>
          <LinkButton sectionID="about">Projetos</LinkButton>
        </nav>
        <HeaderSheet />
      </header>
    </StickyContainer>
  )
}
