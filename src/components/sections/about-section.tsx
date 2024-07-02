import { Dumbbell, Gamepad2, Tv2 } from 'lucide-react'

export default function AboutSection() {
  return (
    <div
      id="about"
      className="col-span-1 row-span-1 flex flex-col items-center justify-center md:flex-row md:justify-around"
    >
      {/* image container */}
      <div className="h-full w-full bg-about-section bg-cover md:w-1/2"></div>
      {/* info container */}
      <div className="flex h-full w-full flex-col items-center justify-center bg-black py-4 shadow-lg sm:px-4 md:w-1/2 lg:px-10">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:w-2/3 md:items-start">
          <h1 className="lg:text-heading-1 text-3xl font-bold text-primary">
            Sobre mim
          </h1>
          <p className="text-justify text-base text-background">
            Sou um <strong className="text-primary">desenvolvedor</strong>{' '}
            apaixonado por criar experiências de usuário incríveis e interfaces
            intuitivas. Com
            <strong className="text-primary">
              {' '}
              +3 anos de experiência{' '}
            </strong>{' '}
            em desenvolvimento web, eu busco sempre criar aplicações web
            escaláveis, seguras e de alta performance utilizando as últimas
            tecnologias e melhores práticas do mercado.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-6">
            <h2 className="text-center text-xl font-semibold text-background">
              Alguns dos meus <i>hobbies</i>
            </h2>
            <div className="grid grid-cols-3 place-items-center gap-3">
              {/* gym */}
              <div className="col-span-1 row-span-1 flex-col items-center justify-center gap-3">
                <div className="flex items-center justify-center text-primary">
                  <Dumbbell className="h-8 w-8" />
                </div>
                <span className="w-full text-center text-base font-semibold text-background">
                  Academia
                </span>
              </div>
              {/* gaming */}
              <div className="col-span-1 flex-col items-center  justify-center gap-3">
                <div className="flex items-center justify-center text-primary">
                  <Gamepad2 className="h-8 w-8" />
                </div>
                <span className="w-full text-center text-base font-semibold text-background">
                  Jogos
                </span>
              </div>
              {/* watching */}
              <div className="col-span-1 flex-col items-center  justify-center gap-3">
                <div className="flex items-center justify-center text-primary">
                  <Tv2 className="h-8 w-8" />
                </div>
                <span className="w-full text-center text-base font-semibold text-background">
                  Séries e Filmes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
