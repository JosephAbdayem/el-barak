/**
 * Entidade referente à model Usuario no back-end
 */
export interface Usuario {
    "id": number,
    "dataCadastro": string,
    "dataAtualizacao": string,
    "ativo": boolean,
    "nome": string,
    "login": string,
    "senha": string,
}
