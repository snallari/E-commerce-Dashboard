import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const intialState={
    loading:false,
    error:"",
    products:[]
}

export const fetchProducts=createAsyncThunk('product/fetchProducts', async()=>{
    const res=await axios.get('https://dummyjson.com/products')
    return res.data.products
})


const productSlice=createSlice({
    name:"products",
    initialState:intialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.loading=true
        })
         builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loading=false
            state.products=action.payload
            state.error=""
        })
         builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})

export default productSlice.reducer
