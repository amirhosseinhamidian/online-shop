import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const Product =(props)=>{
    const {id, title, price, image} = props.data;
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)
    const isInCart = cartItems?.some((item)=>item.id === id)
    return (
        <div className="col-2">
            <img src={image} className="img-fluid"  alt={title}
            style={{ height: '200px', objectFit: 'contain' }}  />
            <div style={{ height: '5.5em', overflow: 'hidden', }}>
                <h6 style={{ lineHeight: '1.2em', marginBottom: '0' }}>{title}</h6>
            </div>
            <h4 >${price}</h4>
            <button className="btn btn-info btn-sm" onClick={() => addToCart(id)}>+</button>
            <span className="mx-2">{cartItems?.filter((row)=> row.id ===id)[0]?.count}</span>
            {isInCart && <button className="btn btn-info btn-sm" onClick={() => removeFromCart(id)}>-</button> }
        </div>
    )
}