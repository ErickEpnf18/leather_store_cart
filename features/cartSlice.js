import {createSlice} from "@reduxjs/toolkit"
import {toast} from "react-toastify";
let cartQuantity = 0
const initialState = {
    cartItems:  typeof window !== "undefined" ? window.localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [] : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item)=> item.title === action.payload.title);
            console.log(itemIndex, "ind ", state.cartItems , action.payload.title)
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`increased ${state.cartItems[itemIndex].title} cart quantity`, {
                    position: "bottom-left",
                })
            }else{
                    const tempProduct = {...action.payload, cartQuantity: 1};
                    state.cartItems.push(tempProduct);
                    toast.success(`${action.payload.title} added to car`, {
                        position: "bottom-left",
                    })
            }
            // const tempProduct = {...action.payload, cartQuantity: 1};
            // state.cartItems.push(tempProduct);
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    },
});

export const {addItemToCart} = cartSlice.actions;
export default cartSlice.reducer;