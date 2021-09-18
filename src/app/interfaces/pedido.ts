import { CarrinhoPedido } from "./carrinho-pedido";
import { Status } from "./status";
import { Usuario } from "./usuario";

/**
 * Entidade referente à model Pedido no back-end
 */
export interface Pedido {
    "id": number,
    "dataCadastro": string,
    "dataAtualizacao": string,
    "ativo": boolean,
    "mesa": number,
    "usuario": Usuario,
    "status": Status,
    "carrinhoPedidos": CarrinhoPedido[],
    "itensPedidos": string
}
