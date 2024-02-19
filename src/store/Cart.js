import { createSlice } from "@reduxjs/toolkit";

const Cart =  createSlice({

    name: 'cart',
    initialState:{
        products:[]
    },
    reducers:{
         addtocart(state,action){
            let _qtyindex=-1
            _qtyindex =state.products.findIndex(item => item.id === action.payload.id)
                 if(_qtyindex>=0){
                    ++state.products[_qtyindex].qty;
                 }
                 else{
                    state.products.push(action.payload)
                 }
               
        },
        removetocart(state,action){
            state.products= state.products.filter(product=>product.id != action.payload.id)
    },
    logout(state,action){
        state.products=[];
    }
  

    }
})




export const {addtocart,removetocart,logout} = Cart.actions;
export default Cart.reducer;
