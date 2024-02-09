import '../components/Sidecart.css'
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

const Sidecart = forwardRef( (props, ref) => {

    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({

        talk() {
            const sidecart = document.querySelector(".sidecart")
            sidecart.style.transform = "translateX(0%)";
        }

    }))
    
    return (

        <section className='sidecart'>
            <h1>CART</h1>
            <div className='items-container'>
                <div className='item-container'>
                    <div className='item-info-container'>
                        <span></span>
                        <h1>COOKIES N' CREAM</h1>
                        <h2 className="item-price">₱300.00</h2>
                        <div className="item-select item-selected"></div>
                    </div>
                </div>

                <div className='item-container'>
                    <div className='item-info-container'>
                        <span></span>
                        <h1>STRAWBERRY</h1>
                        <h2 className="item-price">₱1,000.00</h2>
                        <div className="item-select item-selected"></div>
                    </div>
                </div>

                <div className='item-container'>
                    <div className='item-info-container'>
                        <span></span>
                        <h1>CHOCOLATE</h1>
                        <h2 className="item-price">₱3,000.00</h2>
                        <div className="item-select"></div>
                    </div>
                </div>

                <div className='item-container'>
                    <div className='item-info-container'>
                        <span></span>
                        <h1>MANGO</h1>
                        <h2 className="item-price">₱3,000.00</h2>
                        <div className="item-select"></div>
                    </div>
                </div>

                <div className='item-container'>
                    <div className='item-info-container'>
                        <span></span>
                        <h1>MELON</h1>
                        <h2 className="item-price">₱3,000.00</h2>
                        <div className="item-select"></div>
                    </div>
                </div>

                <div className='item-container'>
                    <div className='item-info-container'>
                        <span></span>
                        <h1>BUKO PANDAN</h1>
                        <h2 className="item-price">₱3,000.00</h2>
                        <div className="item-select"></div>
                    </div>
                </div>
            </div>

            <div className='control-container'>
                <button className="cart-checkout">CHECKOUT</button>
                <span className='delete-items'></span>
            </div>
        </section>

    )

})

export default Sidecart