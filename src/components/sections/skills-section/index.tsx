import { CodeXml, MonitorSmartphone, PencilRuler } from 'lucide-react'
import SkillCard from './skill-card'

export default function SkillSection() {
  return (
    <div
      id="skills"
      className="container col-span-1 row-span-1 flex flex-col items-center justify-around gap-4 py-4"
    >
      <div className="grid w-full  place-items-center gap-3 py-2 text-center lg:py-10">
        <h1 className="text-3xl font-bold text-primary lg:text-heading-1">
          Minhas Habilidades
        </h1>
        <h2 className="text-xl text-zinc-400 lg:text-3xl">
          Conheça um pouco da minha bagagem de conhecimento
        </h2>
      </div>
      <div className="grid h-full w-full grid-cols-1 grid-rows-4 place-content-center gap-2 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-[auto] lg:gap-6">
        {/* DESIGN */}
        <SkillCard
          className="col-span-1"
          icon={PencilRuler}
          title="Design"
          description="Um bom design pode aumentar a confiança, melhorar a experiência do
            usuário e impulsionar os resultados comerciais. É a chave para se
            destacar em um mercado competitivo e criar uma conexão emocional com
            seu público-alvo."
        />

        {/* RESPONSIVIDADE */}
        <SkillCard
          className="col-span-1"
          icon={MonitorSmartphone}
          title="Responsividade"
          description="Um site responsivo melhora a experiência do usuário, aumenta a acessibilidade e a usabilidade, Além disso, a responsividade também pode reduzir a necessidade de manter múltiplos sites para diferentes dispositivos, o que pode economizar tempo e recursos."
        />

        {/* Robustez */}
        <SkillCard
          className="col-span-1"
          icon={CodeXml}
          title="Código Robusto"
          description="Um código robusto é um código que é projetado para ser resistente a erros, falhas e mudanças, caracterizado por uma estrutura sólida, fácil manutenção, escalabilidade e segurança, tornando-o confiável e eficiente em produção."
        />
        {/* Tecnologias */}
        <SkillCard
          className="col-span-1"
          icon={CodeXml}
          title="Tecnologias modernas"
          description="Um código robusto é um código que é projetado para ser resistente a erros, falhas e mudanças, caracterizado por uma estrutura sólida, fácil manutenção, escalabilidade e segurança, tornando-o confiável e eficiente em produção."
        />
      </div>
    </div>
  )
}
