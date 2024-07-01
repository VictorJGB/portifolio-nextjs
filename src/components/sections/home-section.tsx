import Image from 'next/image'

export default function HomeSection() {
  return (
    <div className="flex flex-1 items-center justify-around">
      {/* info container */}
      <div className="flex w-full flex-col items-center justify-center md:w-1/2">
        <h1 className="text-start font-bold text-foreground">
          Olá, me chamo {<br />} <strong>Victor Jerrysson</strong>
        </h1>
        <h2 className="text-start font-medium text-primary">
          Desenvolvedor Front-end
        </h2>
        <p className="font-regular text-start text-zinc-500">
          Sou apaixonado por tecnologia e como ela conecta as pessoas pelo
          mundo.
        </p>
      </div>
      {/* image container */}
      <div className="flex w-full flex-col items-center justify-center md:w-1/2">
        <Image
          className="max-w-full"
          src={'/sections/home/profile.png'}
          alt="Imagem de perfil"
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}
