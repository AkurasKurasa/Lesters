import '../components/Sidecart.css'
import Sidecart_Item from './Sidecart_Item';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

const Sidecart = forwardRef( (props, ref) => {
    
    const [ productList, setProductList ] = useState([{ name: "Cookies", price: "1000.00", hide: false }, { name: "Cream", price: "2000.00", hide: false}, { name: "Crum", price: "2000.00", hide: false}]);
    const [ updatedList, setUpdatedList ] = useState([{ name: "Cookies", price: "1000.00", hide: false }, { name: "Cream", price: "2000.00", hide: false}, { name: "Crum", price: "2000.00", hide: false}])

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

    function handleListRemove(name) {
        
        const list = updatedList.filter( (product) => { return product.name == name })
        list[0].hide = true;

        console.log(list)

    }

    function handleListAdd(name) {
        
        const list = updatedList.filter( (product) => { return product.name == name })
        list[0].hide = false;

        console.log(list)
        

    }

    function removeItems() {

        const list = updatedList.filter( (product) => { return product.hide == false })
        setProductList(list)

    }
    
    return (

        <section className='sidecart'>
            <h1>CART</h1>

            <div className='items-container'>
                { productList.map( (product, index) => <Sidecart_Item key={index} id={index} name={product.name} price={product.price} add={handleListAdd} remove={handleListRemove} />  ) }
            </div>

            <div className='control-container'>
                <button className="cart-checkout">CHECKOUT</button>
                <span className='delete-items' onClick={removeItems}></span>
            </div>
        </section>

    )

})

export default Sidecart