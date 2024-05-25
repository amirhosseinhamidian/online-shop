import React, { useContext } from "react"
import { useProducts } from "../../hook/useProduct"
import { Product } from "../shop/product";
import { ShopContext } from "../../context/shopContext";

export const Cart =() => {
   const { data } = useProducts();
   const { cartItems } = useContext(ShopContext)
   return (
    <React.Fragment>
      <h1>Your cart items</h1>
      <div className="row">
         {data && data.map((product)=>{
            if(cartItems?.some((i) => i.id === product.id && i.count > 0))
               return <Product key={product.id} data={product}/>
         })}
      </div>
    </React.Fragment>
   ) 
}