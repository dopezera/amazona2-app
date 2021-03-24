import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: []}, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload //aqui ta o item que quero botar no carrinho
            const existItem = state.cartItems.find(x => x.product === item.product); //existItem guarda o produto se ele já estiver no carrinho
            if(existItem) { //se o item já tá no carrinho
                return {
                    ...state, //isso diz que nao vou alterar outras propriedades
                    cartItems: state.cartItems.map( x => //eu vou rodar até encontrar o item que o cara solicitou no estado cartItems atual
                        x.product === existItem.product  //comparando o id do item que chegou com o id dos itens que ja estao no estado
                        ? item  //achei. entao retorno a solicitacao mais recente que esta guardada em "item"
                        : x   //se eu nao achei entao deixa o que já tava no carrinho antes (nao sei se isso acontece)
                        )
                }
            } else { //se num tem no carrinho ainda, adicione.
                return { ...state, cartItems: [...state.cartItems, item]};
            }

           
        case CART_REMOVE_ITEM:
            return { 
                ...state, 
                cartItems: state.cartItems.filter( (x) => x.product !== action.payload),
            }
        default:
            return state;
    }
}