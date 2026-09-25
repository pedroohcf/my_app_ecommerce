'use client'

import Pagina from "@/app/components/template/pagina"
import Cabecalho from "@/app/components/template/Cabecalho"
import { produtos } from "@/app/data/constants/Produtos" 
import { useCarrinho } from "./data/contexts/ContextoCarrinho"

export default function Home() {
  const { adicionarProduto, quantidadeTotal } = useCarrinho()

  return (
    <Pagina>
      <div className="flex flex-col gap-5 pb-10 max-w-7xl mx-auto w-full">
        {/* Cabeçalho unificado com Carrinho e Autenticação */}
        <Cabecalho quantidadeTotal={quantidadeTotal} />
        
        {/* Grelha de produtos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 px-5">
          {produtos.map((produto) => (
            <div key={produto.id} className="border rounded-lg p-3 flex flex-col justify-between bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all">
              <div>
                {produto.imagem && (
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome} 
                    className="w-full h-28 object-cover rounded-md mb-2"
                  />
                )}
                <h2 className="font-semibold text-sm text-white line-clamp-1">{produto.nome}</h2>
                <p className="text-zinc-400 text-xs line-clamp-2 mt-1">{produto.descricao}</p>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <span className="text-sm font-bold text-emerald-400">R$ {produto.preco.toFixed(2)}</span>
                
                <button 
                  onClick={() => adicionarProduto(produto)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-1.5 px-3 rounded transition-colors w-full"
                >
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Pagina>
  )
}