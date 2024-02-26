import '../components/Sidecart.css'
import Sidecart_Item from './Sidecart_Item';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

const Sidecart = forwardRef( (props, ref) => {

    
    useImperativeHandle(ref, () => ({

        toggle() {
            const sidecart = document.querySelector(".sidecart")
            sidecart.style.transform = "translateX(0%)";

            let handler = (event) => {
                if ( !(event.composedPath().includes(sidecart)) ) {
                    sidecart.style.transform = "translateX(100%)"
                    document.removeEventListener("mousedown", handler)
                }
            }
    
            document.addEventListener("mousedown", handler)
        }

    }))
    
    return (

        <section className='sidecart'>
            <h1>CART</h1>

            <div className='items-container'>
                { productList.map( (product, index) => <Sidecart_Item key={product.name} id={index} name={product.name} price={product.price}  /> ) }
            </div>

            <div className='control-container'>
                <button className="cart-checkout">CHECKOUT</button>
                <span className='delete-items' onClick={removeItems}></span>
            </div>

            
        </section>

    )

})

export default Sidecart