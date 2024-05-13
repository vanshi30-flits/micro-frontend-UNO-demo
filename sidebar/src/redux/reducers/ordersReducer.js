export const initialState = {
    dataFromOrders: 10
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_FROM_ORDERS':
            console.log("inside reducer");
            return { ...state, dataFromOrders: action.payload }
        default:
            return state;
    }

    return state
}

export default ordersReducer;