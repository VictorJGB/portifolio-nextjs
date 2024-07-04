import ExperienceCard, {
  ExperienceCardProps,
} from './components/experience-card'

const experienceData: ExperienceCardProps[] = [
  {
    title: 'Desenvolvimento na Empresa Vida',
    description:
      ' fui responsável por desenvolver e manter aplicações web escaláveis e responsivas. Colaborei com equipes multidisciplinares para entregar projetos de alta qualidade, garantindo a satisfação dos clientes e o crescimento da empresa.',
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
      className="col-span-1 row-span-1 flex w-full items-center justify-center bg-primary"
    >
      {/* content */}
      <div className="container flex h-full w-full flex-col items-center justify-between py-10 lg:flex-row lg:py-24">
        {/* title */}
        <div className="flex w-full flex-col items-center justify-center gap-2 md:w-1/2 md:items-start lg:h-full">
          <h1 className="text-xl font-bold text-background md:text-3xl lg:text-heading-1">
            Minhas experiências
          </h1>
          <h2 className="text-lg font-semibold text-zinc-300 md:text-xl lg:text-2xl">
            Conheça minhas vivências passadas
          </h2>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 md:w-1/2 md:items-start md:justify-start">
          {experienceData.map((card, index) => {
            return <ExperienceCard key={index} {...card} />
          })}
        </div>
      </div>
    </div>
  )
}
