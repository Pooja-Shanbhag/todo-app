import React from "react"
import prodData from "../data/ProductsData"
import Products from "./Products"

function ProductsApp(){

  const prodComp = prodData.map(prod => <Products prodName={prod.prodName} prodDesc = {prod.prodDesc}/>)

return(
  <div>
    {prodComp}
  </div>
)
}


export default ProductsApp;