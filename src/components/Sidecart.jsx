import '../components/Sidecart.css'
import Sidecart_Item from './Sidecart_Item';
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { CartContext } from '../pages/App';

const Sidecart = forwardRef( (props, ref) => {

    const [ productList, setProductList ] = useContext(CartContext)
    const [ temporaryList, setTemporaryList ] = useState(productList)

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

    function removeItemFromCart(name) { 
        const filtered_items = temporaryList.filter((product) => { if ( product.name != name ) return product })
        setTemporaryList(filtered_items)
    }

    return (

        <section className='sidecart'>
            <h1>CART</h1>

            <div className='items-container'>
                { productList.map( (product, index) => <Sidecart_Item key={product.name} id={index} name={product.name} price={product.price} add={handleListAdd} remove={handleListRemove} />  ) }
            </div>

            <div className='control-container'>
                <button className="cart-checkout">CHECKOUT</button>
                <span className='delete-items' onClick={() => setProductList(temporaryList)}></span>
            </div>

            
        </section>

    )

})

export default Sidecart