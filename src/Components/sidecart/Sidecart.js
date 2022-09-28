import React from 'react';
import './Sidecart.css';

const Sidecart = (props) => {
    const {cart} = props;
   
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for( const product of cart){
        // quantity = quantity + product.quantity;
        total = total + product.time * product.quantity;
        shipping = shipping + product.shipping;
    }


    return (
        <div className='cart'>
             <h2>Exercise Details</h2>
             <h4 className='exercice-time'>Exercise Time : <div> {total} s</div> </h4>
             <h4 className='exercice-time'>Break Time :</h4>
        </div>
        
    );
};

export default Sidecart;