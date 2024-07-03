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
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-black py-6">
      <Image src={icon} alt="tech" width={100} height={100} />
      <span>{title}</span>
      <div className="mt-auto flex items-end justify-center">
        <Link href={link} target="_blank">
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
