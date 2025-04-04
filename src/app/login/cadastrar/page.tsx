import SignUpForm from '@/components/auth/signup-form'
import ArrowLeftIcon from '@/components/ui/svg-icons/arrow-left-icon'
import Link from 'next/link'

export default async function LoginCadastrarPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col bg-white rounded-2xl p-6 min-[450px]:p-12 items-center justify-center gap-20">
        <Link href="/login" className="self-start -mb-10">
          <ArrowLeftIcon />
        </Link>
        <h1 className="font-title font-bold text-4xl">Cadastre-se</h1>
        <SignUpForm />
        <p className="text-zinc-700 font-data text-xs self-start max-w-64 min-[450px]:max-w-full">
          Obs.: Não será necessário confirmar o e-mail.
        </p>
      </div>
    </main>
  )
}
