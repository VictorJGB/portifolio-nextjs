import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export type techCardProps = {
  icon: string
  title: string
  link: string
}

export default function TechCard({ icon, title, link }: techCardProps) {
  return (
    <Link
      className="flex h-full w-full flex-col items-center justify-center gap-4 border-y border-r border-zinc-600 py-6"
      href={link}
      target="_blank"
    >
      <div className="flex h-full w-full flex-col items-center justify-around">
        <Image
          src={icon}
          className="w-20 fill-current text-zinc-400"
          alt="tech"
          width={100}
          height={100}
        />
        <span className="text-base font-medium text-foreground">{title}</span>
      </div>
      <div className="mt-auto flex w-full items-center justify-end">
        <ExternalLink className="mr-6 h-5 w-5 text-accent" />
      </div>
    </Link>
  )
}
