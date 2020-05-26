import React from "react"

function Products(props){
return(
  <div>
    <h1>{props.prodName}</h1>
    <p>{props.prodDesc}</p>
  </div>
)
}

export default Products;