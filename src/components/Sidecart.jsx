import '../components/Sidecart.css'
import Sidecart_Item from './Sidecart_Item';
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { CartContext } from '../pages/App';

const Sidecart = forwardRef( (props, ref) => {
    
    const [ productList, setProductList ] = useContext(CartContext)

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
                { productList }
            </div>

            <div className='control-container'>
                <button className="cart-checkout">CHECKOUT</button>
                <span className='delete-items' onClick={removeItems}></span>
            </div>

            
        </section>

    )

})

export default Sidecart