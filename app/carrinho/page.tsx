// app/carrinho/page.tsx
'use client'
import Pagina from "@/app/components/template/pagina"
import { useCarrinho } from "@/app/data/contexts/ContextoCarrinho"
import Link from "next/link"

export default function PaginaCarrinho() {
  const { itens, removerProduto, adicionarProduto, valorTotal, quantidadeTotal } = useCarrinho()

  return (
    <Pagina>
      <div className="flex flex-col gap-5 py-5 container mx-auto px-5 max-w-4xl">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Carrinho de Compras</h1>
          <Link href="/" className="text-sm text-emerald-400 hover:underline">
            ← Continuar Comprando
          </Link>
        </div>

        {itens.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center text-zinc-400">
            <p className="mb-4">O seu carrinho está vazio.</p>
            <Link href="/" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
              Ver Produtos
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {itens.map((item) => (
                <div key={item.produto.id} className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                  <div className="flex items-center gap-4">
                    {item.produto.imagem && (
                      <img src={item.produto.imagem} alt={item.produto.nome} className="w-16 h-16 object-cover rounded-lg" />
                    )}
                    <div>
                      <h2 className="font-semibold text-white text-sm">{item.produto.nome}</h2>
                      <p className="text-zinc-400 text-xs">R$ {item.produto.preco.toFixed(2)} cada</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-zinc-800 px-3 py-1 rounded-lg text-white text-sm">
                      <span>Qtd: {item.quantidade}</span>
                    </div>

                    <span className="font-bold text-emerald-400 text-sm">
                      R$ {(item.produto.preco * item.quantidade).toFixed(2)}
                    </span>

                    <button 
                      onClick={() => removerProduto(item.produto.id)}
                      className="text-red-400 hover:text-red-300 text-xs font-semibold px-2 py-1 bg-red-950/40 border border-red-900/50 rounded-lg transition-colors"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumo do Pedido */}
            <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex flex-col gap-4">
              <div className="flex justify-between text-zinc-300 text-sm">
                <span>Total de itens:</span>
                <span className="font-semibold text-white">{quantidadeTotal}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-white border-t border-zinc-800 pt-3">
                <span>Valor Total:</span>
                <span className="text-emerald-400">R$ {valorTotal.toFixed(2)}</span>
              </div>

              <button 
                onClick={() => alert("Compra finalizada com sucesso!")}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors w-full mt-2"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </div>
    </Pagina>
  )
}