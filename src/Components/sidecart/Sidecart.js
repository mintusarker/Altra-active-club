import React from 'react';
import './Sidecart.css';

const Sidecart = (props) => {
    const {cart} = props;
   
    let total = 0;
    for( const product of cart){
        total = total + product.time * product.quantity;
    }
    return (
        <div className='cart'>
             <h2 className='exercice-detail'>Exercise Details</h2>
             <h3 className='exercice-time'>Exercise Time : <div> {total} s</div> </h3>
             <h3 className='exercice-time'>Break Time :</h3>
        </div>
        
    );
};

export default Sidecart;