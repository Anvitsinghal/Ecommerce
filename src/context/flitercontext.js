import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../Reducer/FilterReducer"
const FilterContext = createContext();
const initialstate={
    filter_products:[],
    all_products:[],
    grid_view:false,
    sorting_value:"lowest",
    filter:{
        text:"",
    },
};
export const FilterProvider=({children})=>{
    const {products}=useProductContext();
    const [state,dispatch]=useReducer(reducer,initialstate );
    const setgrid=()=>{
        dispatch({type:"set_grid_view"});
    }
    const setlist=()=>{
        dispatch({type:"set_list_view"});
    }
    const sorting=(event)=>{
        let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    }
    useEffect(() => {
        dispatch({ type: "load_filter_product", payload: products });
    }, [products]);

    // Trigger sorting whenever the sorting_value changes
    useEffect(() => {
        dispatch({type:"filter_product"})
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [state.sorting_value,state.filter]);


    const updatefilter=(e)=>{
          let name=e.target.name;
          let val=e.target.value;
          return dispatch({type:"update_filter",payload:{name,val}})
    }
    return(
    <FilterContext.Provider value={{...state,setgrid,setlist,sorting,updatefilter}}>{children}</FilterContext.Provider>
    )
}
const useFilterContext = ()=>{
    return useContext(FilterContext);
};
export default useFilterContext;