import React from 'react';
import useFilterContext from "../context/flitercontext" // Corrected import
import Gridview from './Gridview';
import Listview from '../Listview';
const ProductList = () => {
   const { filter_products ,set_grid_view,grid_view} = useFilterContext();

   return grid_view ? <Gridview products={filter_products} /> : <Listview products={filter_products} />;

}

export default ProductList;
