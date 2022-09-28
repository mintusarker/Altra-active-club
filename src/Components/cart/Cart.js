import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {handleAddToCart} = props;
    const {img, name, time} = props.product;
    return (
        <div className='product'>
            <img src= {img} alt="" />
           <div className='product-info'>
             <p>{name}</p>
             <p>Time Required :{time}s</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-btn'>Add To List</button>
        </div>
    );
};

export default Cart;