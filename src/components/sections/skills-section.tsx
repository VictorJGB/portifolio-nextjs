import { CodeXml, Cpu, MonitorSmartphone, PencilRuler } from 'lucide-react'

export default function SkillSection() {
  return (
    <div
      id="skills"
      className="container col-span-1 row-span-1 flex flex-col items-center justify-center gap-4"
    >
      <div className="grid w-full place-items-center gap-3 py-10 text-center">
        <h1 className="lg:text-heading-1 text-3xl font-bold text-primary">
          Minhas Habilidades
        </h1>
        <h2 className="text-xl text-zinc-400 lg:text-3xl">
          Conheça um pouco da minha bagagem de conhecimento
        </h2>
      </div>
      <div className="grid h-full w-full grid-cols-1 grid-rows-4 place-content-center md:grid-cols-4 md:grid-rows-1">
        {/* DESIGN */}
        <div className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-6">
          <PencilRuler className="h-10 w-10 text-primary" />
          <span>Design</span>
          <p>Descrição</p>
        </div>
        {/* REPONSIVIDADE */}
        <div className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-6">
          <MonitorSmartphone className="h-10 w-10 text-primary" />
          <span>Responsividade</span>
          <p>Descrição</p>
        </div>
        {/* BOAS PRATICAS */}
        <div className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-6">
          <CodeXml className="h-10 w-10 text-primary" />
          <span>Códigos de alta qualidade</span>
          <p>Descrição</p>
        </div>
        {/* Techs */}
        <div className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-6">
          <Cpu className="h-10 w-10 text-primary" />
          <span>Tecnologias Modernas</span>
          <p>Descrição</p>
        </div>
      </div>
    </div>
  )
}
