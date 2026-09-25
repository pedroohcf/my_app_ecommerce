'app/login/page.tsx'
'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Pagina from '@/app/components/template/pagina'

export default function PaginaLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [erro, setErro] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro('')

    const resultado = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (resultado?.error) {
      setErro('Email ou senha inválidos.')
    } else {
      router.push('/')
      router.refresh()
    }
  }

  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-md flex flex-col gap-4">
          <h1 className="text-xl font-bold text-white text-center mb-2">Entrar na Conta</h1>

          {erro && <div className="bg-red-950/50 border border-red-900 text-red-400 text-xs p-3 rounded-lg text-center">{erro}</div>}

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-zinc-400">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@admin.com"
              className="bg-zinc-800 border border-zinc-700 rounded-lg p-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-zinc-400">Senha</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              placeholder="123456"
              className="bg-zinc-800 border border-zinc-700 rounded-lg p-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
              required
            />
          </div>

          <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors mt-2">
            Entrar
          </button>
        </form>
      </div>
    </Pagina>
  )
}