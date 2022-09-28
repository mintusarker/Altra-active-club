import React from 'react';

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
             <h4>Exercise Time : {total} </h4>
             <h4>Break Time :</h4>
        </div>
        
    );
};

export default Sidecart;