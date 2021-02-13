export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer =  (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case 'ADD_TO_BASKET':
            // Adicionando itens no carrinho
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // Removendo itens do carrinho

            // criando um carrinho novo pra adicionar no novo ...state qndo algun item for atualizado
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // item esta no carrinho > entao remove > usando splice pra cortar o item do carrinho
              newBasket.splice(index, 1);
                
            } else {
                console.warn(
                    `item nao pode ser removigo (id: ${action.id}) pq nao esta no carrinho.`
                );
            }
            // retornando o state atual do carrinho > adicionando o carrinho novo depois da atualizacao/ depois de remover algum item
            return {...state, basket: newBasket};
        default:
            return state;
    }
}

export default reducer;