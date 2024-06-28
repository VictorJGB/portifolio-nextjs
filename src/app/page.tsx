import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="grid min-h-screen w-full place-items-center">
      <h1>Home page!</h1>
      <div className="grid w-1/2 place-items-center gap-3">
        <h2>shadcn buttons example</h2>
        <div className="grid w-full grid-cols-5 gap-3">
          <Button>Primary</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'destructive'}>Destructive</Button>
          <Button variant={'outline'}>Outline</Button>
          <Button variant={'ghost'}>Ghost</Button>
        </div>
      </div>
    </main>
  )
}
