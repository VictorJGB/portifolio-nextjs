import ExperienceCard, {
  ExperienceCardProps,
} from './components/experience-card'

const experienceData: ExperienceCardProps[] = [
  {
    title: 'Desenvolvimento na Empresa Vida',
    description:
      'Fui responsável por desenvolver e manter aplicações web escaláveis e responsivas. Colaborei com equipes multidisciplinares para entregar projetos de alta qualidade, garantindo a satisfação dos clientes e o crescimento da empresa.',
    initialDate: '2024',
    lastDate: 'ATUAL',
    technologies: [
      'NextJS',
      'Flutter',
      'Typescript',
      'TailwindCSS',
      'Shadcn UI',
      'React Hook Form',
    ],
  },
  {
    title: 'Residência em Front-End - iUUL',
    description:
      'Nesta residência trabalhei com: Angular, Sass, Angular Material, Typescript, Git, Azure Workflow, Figma, SCRUM.',
    initialDate: '2023',
    lastDate: '2024',
    technologies: ['Angular', 'Typescript', 'SCSS', 'Angular Material'],
  },
  {
    title: 'Freelancer',
    description:
      'Trabalhei com múltiplos clientes em diversos projetos de desenvolvimento web, incluindo plataformas de comércio eletrônico, blogs e sites corporativos',
    initialDate: '2021',
    lastDate: 'ATUAL',
    technologies: [
      'HTLM',
      'CSS',
      'Javascript',
      'React',
      'React Native',
      'Angular',
      'NextJS',
      'TailwindCSS',
      'SCSS',
      'Typescript',
      'Angular Material',
      'Shadcn UI',
      'React Hook Form',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <div
      id="experiences"
      className="col-span-1 row-span-1 flex flex-col items-center justify-between gap-5 bg-primary py-section lg:flex-row lg:gap-0 lg:py-0"
    >
      {/* title */}
      <div className="flex h-full w-full flex-col items-center justify-center bg-inherit lg:h-full lg:w-1/2 lg:bg-experience-section-title">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-inherit pl-10 backdrop-blur-sm lg:items-start lg:justify-start lg:gap-5 lg:bg-black/60 lg:pt-40">
          <h1 className="text-3xl font-bold text-background xl:text-heading-1">
            Minhas experiências
          </h1>
          <h2 className="text-center text-xl font-semibold text-zinc-300 md:text-start xl:text-2xl">
            Conheça minhas vivências passadas
          </h2>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-primary px-8 py-10 md:w-2/3 md:items-start md:justify-start lg:w-1/2 ">
        {experienceData.map((card, index) => {
          return <ExperienceCard key={index} {...card} />
        })}
      </div>
    </div>
  )
}
