import { faLocation, faLocationArrow, faLocationDot, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Sidecart from '../sidecart/Sidecart';
import './Product.css';

const Product = () => {

    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect( () =>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);


    const handleAddToCart = (selectCart) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selectCart.id);
        if(!exists){
            selectCart.quantity = 1;
            newCart = [...cart ,selectCart];
        }
        else{
            const rest = cart.filter(product => product.id !== selectCart.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest , exists];
            console.log(newCart)
        }
        setCart(newCart);

    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Cart
                    key = {product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Cart>)
                }

            </div>
            <div className='cart-container'>
             
             <div> 
                <div className='name'><h2>Minto Sarker</h2></div>
                <div className='info'>
                <div>
                    <FontAwesomeIcon icon={faLocationDot} ></FontAwesomeIcon></div> 
                <div> Dhaka, Bangladesh</div>
                </div>

                <div className='info-info'>
                    <div><h2>60 kg</h2><p>Weight</p></div>
                    <div><h2>6 feet</h2><p>Height</p></div>
                    <div><h2>Msc</h2><p>Education</p></div>
                </div> 

                <h2>Add A Break</h2>

                <div className='time-break'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
                </div>
             </div>

             <div>
            <Sidecart cart = {cart}></Sidecart>
             </div>
            </div>
        </div>
    );
};

export default Product;