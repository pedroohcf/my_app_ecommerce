// app/components/template/Cabecalho.tsx
'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"

interface CabecalhoProps {
  quantidadeTotal: number
}

export default function Cabecalho({ quantidadeTotal }: CabecalhoProps) {
  const { data: session } = useSession()
  const pathname = usePathname()

  // Não mostrar o cabeçalho se já estivermos na página de login (opcional)
  if (pathname === '/login') return null

  return (
    <div className="flex justify-between items-center px-5 py-3 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-white hover:text-emerald-400 transition-colors">
        Início - Produtos
      </Link>
      
      <div className="flex items-center gap-3">
        {/* Botão do Carrinho */}
        <Link 
          href="/carrinho" 
          className="bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-lg text-sm text-zinc-300 transition-colors flex items-center gap-2 border border-zinc-700"
        >
          🛒 Carrinho: <span className="font-bold text-emerald-400">{quantidadeTotal}</span> itens
        </Link>

        {/* Autenticação: Entrar ou Nome do Utilizador / Sair */}
        {session?.user ? (
          <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg text-sm">
            <span className="text-zinc-300 hidden sm:inline">{session.user.email}</span>
            <button 
              onClick={() => signOut()}
              className="text-red-400 hover:text-red-300 font-semibold transition-colors text-xs bg-red-950/40 border border-red-900/50 px-2 py-1 rounded-md"
            >
              Sair
            </button>
          </div>
        ) : (
          <Link 
            href="/login" 
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors"
          >
            Entrar
          </Link>
        )}
      </div>
    </div>
  )
}