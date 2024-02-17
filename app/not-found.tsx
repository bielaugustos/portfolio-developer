import Link from 'next/link'
import { Button } from './components/button'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1 className="text-9xl font-bold text-amber-500">404</h1>
      <h2 className="text-2xl font-sm text-gray-400 mb-4">
        Página não encontrada
      </h2>
      <Link href="/">
        <Button>
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Button>
      </Link>
    </div>
  )
}
