import { techIcon } from '@/data/techs'
import Project from '@/types/project'
import { ProjectCard } from './components/project-card'

const projectData: Project[] = [
  {
    title: 'Convertix',
    description: 'Conversor de moedas',
    image: '/sections/projects/convertix.png',
    link: 'https://github.com/VictorJGB/convertix',
    techs: [
      techIcon.angular,
      techIcon.typescript,
      techIcon.tailwindcss,
      techIcon.eslint,
      techIcon.zod,
    ],
  },
  {
    title: 'Mounty Hall',
    description: 'Simulador do Mounty Hall Problem',
    image: '/sections/projects/mounty-hall.png',
    link: 'https://github.com/VictorJGB/mounty-hall-nextjs',
    techs: [
      techIcon.nextjs,
      techIcon.typescript,
      techIcon.tailwindcss,
      techIcon.eslint,
    ],
  },
  {
    title: 'Aura Discord',
    description: 'Clone UI do Discord',
    image: '/sections/projects/aura-discord.png',
    link: 'https://github.com/VictorJGB/aura-discord',
    techs: [techIcon.react, techIcon.typescript],
  },
]

export default function ProjectSection() {
  return (
    <div
      id="projects"
      // eslint-disable-next-line prettier/prettier
      className="container col-span-1 row-span-1 flex flex-col items-center justify-center py-section"
    >
      <div className="col-span-1 row-span-1 grid place-items-center gap-3">
        <h1 className="text-3xl font-bold text-primary lg:text-heading-1">
          Meus projetos
        </h1>
        <h2 className="text-center text-xl text-zinc-400 lg:text-2xl">
          Conheça a síntese dos meus conhecimentos
        </h2>
      </div>
      <div className="flex size-full flex-wrap items-center justify-center gap-6 py-6">
        {projectData.map((project, index) => {
          return <ProjectCard key={index} {...project} />
        })}
      </div>
    </div>
  )
}
