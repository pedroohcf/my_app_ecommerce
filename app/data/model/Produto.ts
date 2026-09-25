export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
    imagem?: string; // <-- Adiciona esta linha aqui
}