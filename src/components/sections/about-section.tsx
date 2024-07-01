import { Contact, Dumbbell, Gamepad2, Tv2 } from 'lucide-react'
import { Separator } from '../ui/separator'

export default function AboutSection() {
  return (
    <div
      id="about"
      className="col-span-1 row-span-1 flex flex-col items-center justify-center bg-primary px-4 md:flex-row md:justify-around"
    >
      {/* icon container */}
      <div className="grid w-1/2 place-items-center md:w-1/3">
        <Contact className="h-2/3 w-2/3 text-background" />
      </div>
      {/* info container */}
      <div className="grid w-full place-items-center gap-3 rounded-md bg-background p-4 shadow-lg md:w-1/2">
        <h1 className="text-3xl font-bold text-primary">Sobre mim</h1>
        <p className="text-justify text-base">
          Sou um <strong className="text-accent">desenvolvedor</strong>{' '}
          apaixonado por criar experiências de usuário incríveis e interfaces
          intuitivas. Com
          <strong className="text-accent"> +3 anos de experiência </strong> em
          desenvolvimento web, eu busco sempre criar aplicações web escaláveis,
          seguras e de alta performance utilizando as últimas tecnologias e
          melhores práticas do mercado.
        </p>
        <Separator className="my-4 w-1/6 bg-primary" />
        <div className="flex-col items-center justify-center">
          <h2 className="mb-5 text-center text-xl font-semibold text-primary">
            Alguns dos meus <i>hobbies</i>
          </h2>
          <div className="grid grid-cols-3 place-items-center">
            {/* gym */}
            <div className="col-span-1 row-span-1 flex-col items-center justify-center gap-3">
              <div className="flex items-center justify-center text-primary">
                <Dumbbell className="h-8 w-8" />
              </div>
              <span className="text-base font-semibold text-foreground">
                Academia
              </span>
            </div>
            {/* gaming */}
            <div className="col-span-1 flex-col items-center  justify-center gap-3">
              <div className="flex items-center justify-center text-primary">
                <Gamepad2 className="h-8 w-8" />
              </div>
              <span className="text-base font-semibold text-foreground">
                Jogos
              </span>
            </div>
            {/* watching */}
            <div className="col-span-1 flex-col items-center  justify-center gap-3">
              <div className="flex items-center justify-center text-primary">
                <Tv2 className="h-8 w-8" />
              </div>
              <span className="text-base font-semibold text-foreground">
                Séries e Filmes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
