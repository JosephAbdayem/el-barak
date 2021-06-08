import { Categoria } from "./categoria";

export interface Produto {
    "id": number,
    "dataCadastro": string,
    "dataAtualizacao": string,
    "ativo": boolean,
    "nome": string,
    "descricao": string,
    "preco": number,
    "categoria": Categoria
    "quantidade": number
}
