function getProducts (searchQuery) {
    return async(dispatch,getState)=>{
        let url = ` https://my-json-server.typicode.com/kimbyeong-9/hnm-react-router-practice/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCTS_SUCCESS",payload:{data}})

    }
}

export const productAction ={getProducts}