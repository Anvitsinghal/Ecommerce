import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../Reducer/ProductReducer";


const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialdata={
   isLoading:false,
   isError:false,
   products:[],
   fetauredproducts:[],
   isSingleLoading:false,
   singleproduct:{}
};


const AppProvider = ({ children }) => {
  const [state,dispatch]=useReducer(ProductReducer,initialdata);
  const getdata= async(url)=>{
    dispatch({type:"setloading"});
    try{
           const res = await axios.get(url);
           
           const product = res.data;
           dispatch({type:"my_api_data",payload:product});
           console.log(res);
    }
    catch(error){
      dispatch({type:"api_error"});
    }
  }
    useEffect(()=>{
        getdata(API);
    },[]);

     const getsingledata = async(url)=>{
      dispatch({type:"setsingleloading"});
      try{
         const product= await axios.get(url);
         const singleproductt= await product.data;
         dispatch({type:"my_single_api_data",payload:singleproductt});

      }catch(error){
        dispatch({type:"single_api_error"});
      }
     }
  





  return <AppContext.Provider value={{...state,getsingledata}}>{children}</AppContext.Provider>;
};
// custom hook
const useProductContext=()=>{
  return useContext(AppContext);
}
export { AppProvider, AppContext ,useProductContext};



// step1: create context 
// step2: create function and pass {Children} in it 
// step3: export the function 
// step4: wrap the function in app ie index.js 
// #{Children} in function is basically app which we wrapped

//function me return krenge jo humne create context hook ko jis variable me store kiya hai uska provider


//now we want ke koi bhi component value access kar sake to us component me jao and
// const Variable = useContext(Appcontext)
// jaha value chahiye vha {Variable} likh do 

