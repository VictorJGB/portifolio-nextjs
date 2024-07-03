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
      className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border border-black py-6"
      href={link}
      target="_blank"
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Image
          src={icon}
          className="w-20 fill-current text-zinc-400"
          alt="tech"
          width={100}
          height={100}
        />
        <span>{title}</span>
      </div>
      <div className="mt-auto flex items-end justify-center">
        <ExternalLink className="h-4 w-4" />
      </div>
    </Link>
  )
}
