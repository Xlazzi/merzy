
const initState={
    cart:[],
};

const productReducer = (state = initState, action) => {
    console.log("action",action);
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                cart:[...state.cart,action.data]
            };
        default:
            return state;
    };
}
export default productReducer;