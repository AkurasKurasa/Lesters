import '../components/Sidecart.css'
import Sidecart_Item from './Sidecart_Item';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

const Sidecart = forwardRef( (props, ref) => {

    const [ productList, setProductList ] = useState([{ name: "COOKIES & CREAM", price: "₱1000.00", hide: false }, { name: "CHOCOLATE", price: "₱2000.00", hide: false}, { name: "CHEESE", price: "₱2000.00", hide: false}]);
    const [ updatedList, setUpdatedList ] = useState(productList)

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

    // fix implementation; bad pattern
    function handleListRemove(name) {
        
        const list = updatedList.filter( (product) => { return product.name == name })
        list[0].hide = true;

    }

    // fix implementation; bad pattern
    function handleListAdd(name) {
        
        const list = updatedList.filter( (product) => { return product.name == name })
        list[0].hide = false;        

    }

    function removeItems() {

        const list = updatedList.filter( (product) => { return product.hide == false })
        setProductList(list)

    }
    
    return (

        <section className='sidecart'>
            <h1>CART</h1>

            <div className='items-container'>
                { productList.map( (product, index) => <Sidecart_Item key={product.name} id={index} name={product.name} price={product.price} add={handleListAdd} remove={handleListRemove} /> ) }
            </div>

            <div className='control-container'>
                <button className="cart-checkout">CHECKOUT</button>
                <span className='delete-items' onClick={removeItems}></span>
            </div>

            
        </section>

    )

})

export default Sidecart