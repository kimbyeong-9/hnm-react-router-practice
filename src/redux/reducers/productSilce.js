import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
let initialState = {
    productList:[],
    selectedItem:null,
    isLoading:false,
    error:null,
}

export const fetchProducts = createAsyncThunk(
    "fetchProducts",
    async(searchQuery,thunkApi) => {
        try{let url = ` https://my-json-server.typicode.com/kimbyeong-9/hnm-react-router-practice/products?q=${searchQuery}`
        let response = await fetch(url);
        return await response.json();
    }catch(error){
        thunkApi.rejectWithValue(error.message);
    }
    
})
function getProductDetail(id){
    return async(dispatch)=>{
        let url = `https://my-json-server.typicode.com/kimbyeong-9/hnm-react-router-practice/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_DETAIL",payload:{data}});
    }
}
// function productReducer(state = initialState, action){
//     let {type,payload} = action;
    // switch(type){
//         case "GET_PRODUCTS_SUCCESS":
//             return {...state,productList:payload.data}
//         default:
//             return {...state}
    // }
// }


// export default productReducer;

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers: {
        getSingleProduct(state,action) {
            state.selectedItem = action.payload.data;
        },
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.productList = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
});


export const productActions = productSlice.actions;
export default productSlice.reducer;

