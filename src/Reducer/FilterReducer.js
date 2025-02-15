// const Filterreducer=(state,action)=>{
//     switch(action.type){
//         case "load_filter_product":
//             return {
//                 ...state,
//                 filter_products:[...action.payload],
//                 all_products:[...action.payload],
            
//             }
//             case "set_grid_view":
//                 return {
//                     ...state,
//                     grid_view:true,
//                 }
//             case "set_list_view":
//                 return{
//                     ...state,
//                     grid_view:false,
//                 } 
                
//                 case "GET_SORT_VALUE":
//                     // let userSortValue = document.getElementById("sort");
//                     // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
//                     return {
//                       ...state,
//                       sorting_value: action.payload,
//                     };
              
//                     case "SORTING_PRODUCTS":
//                       const { filter_products, sorting_value } = state;
                  
//                       // Always create a new array instead of modifying the original array
//                       const tempSortProduct = [...filter_products]; 
                  
//                       const sortingProducts = (a, b) => {
//                           switch(sorting_value) {
//                               case "lowest":
//                                   return a.price - b.price;
//                               case "highest":
//                                   return b.price - a.price;
//                               case "a-z":
//                                   return a.name.localeCompare(b.name);
//                               case "z-a":
//                                   return b.name.localeCompare(a.name);
//                               default:
//                                   return 0;
//                           }
//                       };
                  
//                       // Create a new sorted array
//                       const newSortData = tempSortProduct.sort(sortingProducts);
                  
//                       return {
//                           ...state,
//                           filter_products: newSortData,
//                       };
                  

//         default:
//             return state;    
//     }
// }
// export default Filterreducer;

const Filterreducer = (state, action) => {
  switch (action.type) {
      case "load_filter_product":
          return {
              ...state,
              filter_products: [...action.payload],
              all_products: [...action.payload],
          };
      case "set_grid_view":
          return {
              ...state,
              grid_view: true,
          };
      case "set_list_view":
          return {
              ...state,
              grid_view: false,
          };
      case "GET_SORT_VALUE":
          return {
              ...state,
              sorting_value: action.payload,
          };
      case "SORTING_PRODUCTS":
          const { filter_products, sorting_value } = state;

          // Always create a new array instead of modifying the original array
          const tempSortProduct = [...filter_products];

          const sortingProducts = (a, b) => {
              switch (sorting_value) {
                  case "lowest":
                      return a.price - b.price;
                  case "highest":
                      return b.price - a.price;
                  case "a-z":
                      return a.name.localeCompare(b.name);
                  case "z-a":
                      return b.name.localeCompare(a.name);
                  default:
                      return 0;
              }
          };

          // Create a new sorted array
          const newSortData = tempSortProduct.sort(sortingProducts);

          return {
              ...state,
              filter_products: newSortData,
          };

       case "update_filter":
        const {name,val}=action.payload;
        return {
            ...state,
            filter:{
                ...state.filters,
                [name]:val,

            }
        }
        case "filter_product":
            let {all_products}=state;
            let tempFilterProduct=[...all_products];
            const {text}=state.filter;
            if(text){
                tempFilterProduct=tempFilterProduct.filter((curr)=>{
                    return curr.name.toLowerCase().includes(text);
                })
            }
            return {
                ...state,
                filter_products:tempFilterProduct,
            }

      default:
          return state;
  }
};

export default Filterreducer;
