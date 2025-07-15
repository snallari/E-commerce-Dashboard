import { createSlicer } from "@reduxjs/toolkit"
const initialState={
    cartItems: []
}

const cartSlicer=createSlicer({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cartItems.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            state.cartItems=state.cartItemsfilter(item=>(item.id!==action.payload.id))
        }
    }

})

export default cartSlicer.reducers
export const actions=cartSlicer.actions