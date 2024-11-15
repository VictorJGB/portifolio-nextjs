import { Button } from '@/components/ui/button'
import {
  CodeXml,
  ExternalLink,
  FolderSync,
  MonitorSmartphone,
  PencilRuler,
} from 'lucide-react'
import Link from 'next/link'
import SkillCard from './components/skill-card'
import TechCarousel from './components/tech-carousel'

export default function SkillSection() {
  return (
    <div
      id="skills"
      className="container col-span-1 row-span-1 grid grid-cols-1 grid-rows-[auto_auto_auto_auto] place-content-center place-items-center gap-8 py-section"
    >
      {/* title */}
      <div className="col-span-1 row-span-1 grid place-content-center place-items-center gap-3 py-2 text-center lg:py-5">
        <h1 className="text-3xl font-bold text-primary lg:text-heading-1">
          Minhas Habilidades
        </h1>
        <h2 className="text-xl text-zinc-400 lg:text-2xl">
          Conheça um pouco da minha bagagem de conhecimento
        </h2>
      </div>
      {/* skills */}
      <div className="col-span-1 row-span-1 grid grid-cols-1 grid-rows-4 place-content-center gap-4 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-4 xl:grid-rows-[auto]">
        {/* DESIGN */}
        <SkillCard
          className="col-span-1"
          icon={PencilRuler}
          title="Design"
          description="Um bom design pode aumentar a confiança, melhorar a experiência do
            usuário e impulsionar os resultados comerciais. É a chave para se
            destacar em um mercado competitivo e criar uma conexão emocional com
            seu público-alvo"
        />

        {/* RESPONSIVIDADE */}
        <SkillCard
          className="col-span-1"
          icon={MonitorSmartphone}
          title="Responsividade"
          description="Um site responsivo melhora a experiência do usuário, aumenta a acessibilidade e a usabilidade, Além disso, a responsividade também pode reduzir a necessidade de manter múltiplos sites para diferentes dispositivos, o que pode economizar tempo e recursos"
        />

        {/* Robustez */}
        <SkillCard
          className="col-span-1"
          icon={CodeXml}
          title="Código Robusto"
          description="Um código robusto é um código que é projetado para ser resistente a erros, falhas e mudanças, caracterizado por uma estrutura sólida, fácil manutenção, escalabilidade e segurança, tornando-o confiável e eficiente em produção"
        />
        {/* Tecnologias */}
        <SkillCard
          className="col-span-1"
          icon={FolderSync}
          title="Sintonia"
          description="Estar em constante sintonia com as tecnologias do mercado de desenvolvimento, significa ter uma produtividade maior, redução de custos e uma melhora na experiência do usuário"
        />
      </div>
      {/* techs */}
      <div className="row-span-1 flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
        <h2 className="w-full text-center text-2xl font-semibold text-accent lg:w-1/4 lg:text-start lg:text-3xl">
          Tecnologias <br className="hidden lg:flex" /> que domino
        </h2>
        <TechCarousel className="w-full lg:w-3/4" />
      </div>
      <div className="col-span-1 row-span-1 grid place-items-center py-4">
        <Button variant={'outline'} asChild>
          <Link
            href={'https://github.com/VictorJGB'}
            target="_blank"
            className="border-[1.5px] border-primary px-10 py-8 text-primary"
          >
            <span className="text-xl">Saiba mais</span>
            <ExternalLink className="ml-4 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
