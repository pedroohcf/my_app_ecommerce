import React from 'react';
import { produtos } from '../constants/Produtos'; // Ajuste o caminho se necessário
import './Produto.css'; // Importa o ficheiro CSS

export default function ListaProdutos() {
  return (
    <div className="pagina-produtos">
      <h1 className="titulo-secao">Início - Produtos</h1>
      
      <div className="grid-produtos">
        {produtos.map((produto) => (
          <div key={produto.id} className="card-produto">
            {produto.imagem && (
              <img 
                src={produto.imagem} 
                alt={produto.nome} 
                className="imagem-produto"
              />
            )}
            <div className="conteudo-card">
              <h2 className="nome-produto">{produto.nome}</h2>
              <p className="descricao-produto">{produto.descricao}</p>
              
              <div className="rodape-card">
                <span className="preco-produto">
                  R$ {produto.preco.toFixed(2)}
                </span>
                <span className="estoque-produto">Qtd: {produto.quantidade}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}