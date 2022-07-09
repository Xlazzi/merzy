
const initState={
    cart:[],
};
const updateQuantity = p =>
  p.quantity ? { ...p, quantity: parseInt(p.quantity) + 1 } : { ...p, quantity: parseInt(2) };

const productReducer = (state = initState, action) => {
    console.log("action",action);
    console.log("state",state);
    switch (action.type) {
        case "ADD_PRODUCT":
            const productInCart = state.cart.find(p => p.id === action.data.id);
            if (!productInCart) 
              return {  
                ...state,
                cart:[...state.cart, action.data]
              };
            else          
            return  {  
              ...state,
              cart: state.cart.map(p => {
                if (p.id === action.data.id) {
                  return updateQuantity(p);
                }
                return p;
              })
            };
        case "DECREASE_PRODUCT":
              return{
              ...state,
              cart: state.cart.map(item => { // lặp qua các item trong list cart
                if (item.id === action.data.id) { // nếu item mà nó lặp qua = với item mà mình gửi vào
                return action.data; // thì update quantity
                }
                return item;
              })
              }
        case "DELETE_CART":
                return {
                  ...state,
                  cart: state.cart.filter((x)=>x.id != action.data.id)
                };
        default:
            return state;
    };
}
export default productReducer;