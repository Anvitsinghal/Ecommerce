const ProductReducer=(state,action)=>{
      if(action.type==="setloading"){
        return{
            ...state,
            isLoading:true,
        }
      }
      if(action.type==="api_error"){
        return{
            ...state,
            isLoading:false,
            isError:true
        }
      }
      if(action.type==="single_api_error"){
        return{
            ...state,
            isSingleLoading:false,
            isError:true
        }
      }
      if(action.type==="setsingleloading"){
        return{
            ...state,
            isSingleLoading:true
        }
      }
      if(action.type==="my_single_api_data"){
        return{
            ...state,
            isSingleLoading:false,
            singleproduct: action.payload
        }
      }
      if(action.type==="my_api_data"){
        const featuredata = action.payload.filter((currele)=>{
                 return currele.featured===true;
        });
        return{
            ...state,
            isLoading:false,
            products: action.payload,
            fetauredproducts:featuredata
        }
      }

}
export default ProductReducer;