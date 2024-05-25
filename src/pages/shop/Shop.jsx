import React from "react"
import { Product } from "./product"
import { useProducts } from "../../hooks/useProduct"


export const Shop =() => {
    const { data, isLoading, error } = useProducts();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;
    return (
        <React.Fragment>
            <h1>Shop</h1>
            <div className="row">
                {data && data.map((product)=>{
                    return <Product key={product.id} data={product}/>
                })}
            </div>
        </React.Fragment>
    )
}