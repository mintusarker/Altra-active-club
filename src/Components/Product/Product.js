import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Cart from '../cart/Cart';
import SideCart from '../sidecart/SideCart';
import { localStorageData } from '../Utilities/Setdata';
import './Product.css';


const Product = () => {

    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    const [time , SetTime] = useState([]);

    useEffect( () =>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    
// time required button event handler
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

// break time handler
    const timeHandle = (time) =>{
    const newTime = time;
    SetTime(newTime);
    localStorageData(newTime);
  }

//   toast handler
 const notify = () =>{
    toast('WOW !! Good Job. Thank You.')
 }

    return (
     <div>
        <div className='select'><h2>Instruments Select</h2></div>
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
                    <div><h3>60 kg</h3><p>Weight</p></div>
                    <div><h3>6 feet</h3><p>Height</p></div>
                    <div><h3>Msc</h3><p>Education</p></div>
                </div> 

                <h2 className='add-break'>Add A Break</h2>

                <div className='time-break'>
                <button onClick={() => timeHandle('10s')}>10s</button>
                <button onClick={() => timeHandle('20s')}>20s</button>
                <button onClick={() => timeHandle('30s')}>30s</button>
                <button onClick={() => timeHandle('40s')}>40s</button>
                <button onClick={() => timeHandle('50s')}>50s</button>
                </div>
             </div>

             <div>
                
            <SideCart cart = {cart}></SideCart>

             </div>

            <div >
            <h3 className='break-time'>Break Time : <div>{time} </div></h3>
            </div>
          
            <button onClick={()=>notify()} className='toast-button'>Activity Completed</button><ToastContainer></ToastContainer>
            </div>
        </div>   
     </div>   
    );
};

export default Product;