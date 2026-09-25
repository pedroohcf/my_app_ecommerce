// app/contexts/ContextoCarrinho.tsx
'use client'

import { createContext, useContext, useState } from 'react'
import Produto from '../model/Produto'

interface ItemCarrinho {
  produto: Produto
  quantidade: number
}

interface ContextoCarrinhoType {
  itens: ItemCarrinho[]
  adicionarProduto: (produto: Produto) => void
  removerProduto: (produtoId: number) => void
  valorTotal: number
  quantidadeTotal: number
}

const ContextoCarrinho = createContext<ContextoCarrinhoType | undefined>(undefined)

export function ProvedorCarrinho({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([])

  function adicionarProduto(produto: Produto) {
    setItens(itensAtuais => {
      const indice = itensAtuais.findIndex(item => item.produto.id === produto.id)
      if (indice !== -1) {
        const novosItens = [...itensAtuais]
        novosItens[indice].quantidade += 1
        return novosItens
      } else {
        return [...itensAtuais, { produto, quantidade: 1 }]
      }
    })
  }

  function removerProduto(produtoId: number) {
    setItens(itensAtuais => itensAtuais.filter(item => item.produto.id !== produtoId))
  }

  const valorTotal = itens.reduce((total, item) => total + item.produto.preco * item.quantidade, 0)
  const quantidadeTotal = itens.reduce((total, item) => total + item.quantidade, 0)

  return (
    <ContextoCarrinho.Provider value={{ itens, adicionarProduto, removerProduto, valorTotal, quantidadeTotal }}>
      {children}
    </ContextoCarrinho.Provider>
  )
}

export function useCarrinho() {
  const contexto = useContext(ContextoCarrinho)
  if (!contexto) throw new Error("useCarrinho deve ser usado dentro de um ProvedorCarrinho")
  return contexto
}