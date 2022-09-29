import React from 'react';
import './SideCart.css';

const SideCart = (props) => {
    const {cart} = props;
   
    let total = 0;
    for( const product of cart){
        total = total + product.time * product.quantity;
    }
    return (
        <div className='cart'>
             <h2 className='exercice-detail'>Exercise Details</h2>
             <h3 className='exercice-time'>Exercise Time : <div> {total} seconds</div> </h3>
        </div>
        
    );
};

export default SideCart;