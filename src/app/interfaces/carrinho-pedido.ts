import { CarrinhoPedidoId } from "./carrinho-pedido-id";
import { Produto } from "./produto";

/**
 * Entidade referente à model CarrinhoPedido no back-end
 */
export interface CarrinhoPedido {
    "id": CarrinhoPedidoId,
    "produto": Produto,
    "quantidade": number,
}
