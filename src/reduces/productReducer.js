
const initState={
    product:[],
    cart:[],
};

const productReducer = (state = initState, action) => {
    console.log("action",action);
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart:[...state.cart,action.data]
            };
        default:
            return state;
    };
}
export default productReducer;