import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ProductSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:'idle',
        error:null

    },
    reducers:{
        fetchProductStart:(state)=>{
            state.status='loading'

        },
        fetchProductSuccess:(state, action)=>{
            state.status='success'
            state.data= action.payload

        },
        fetchProductFailure:(state, action)=>{
            state.status='failed'
            state.error= action.payload
        }



    }
    
})
//function returns another callback function
export const fetchProduct=()=>async(dispatch)=>{

    dispatch(fetchProductStart())

    try {
        const res= await axios.get('https://66a7e08a53c13f22a3d1569d.mockapi.io/api/products')
        dispatch(fetchProductSuccess(res.data))
        
    } catch (error) {
        dispatch(fetchProductFailure(error.message))
        
    }

}
export const{fetchProductStart,fetchProductSuccess, fetchProductFailure}= ProductSlice.actions
export default ProductSlice.reducer