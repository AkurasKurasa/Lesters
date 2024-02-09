import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Sidecart from '../components/Sidecart.jsx'

import '../styles/Cart.css'

function Cart() {

    return (
        <>
            <Navbar />
            <Sidecart />

            <main>
                <section className='layout_cart'>
                    <h1>YOUR CART</h1>
                    <div className='cart-form-container'>
                        <ul className='cart-container'>
                            <li className='cart-item'>
                                <h1>CHOCOLATE</h1>
                                <h2>₱300.00</h2>
                                <span>X</span>
                            </li>
                            <li className='cart-item'>
                                <h1>STRAWBERRY</h1>
                                <h2>₱1,000.00</h2>
                                <span>X</span>
                            </li>
                            <li className='cart-item'>
                                <h1>COOKIES N' CREAM</h1>
                                <h2>₱3,000.00</h2>
                                <span>X</span>
                            </li>
                            <li className='cart-item'>
                                <h1>MANGO</h1>
                                <h2>₱600.00</h2>
                                <span>X</span>
                            </li>
                            <li className='cart-item'>
                                <h1>MELON</h1>
                                <h2>₱600.00</h2>
                                <span>X</span>
                            </li>
                        </ul>
                        <form className='form-container'>
                            <h3>SHIPPING DETAILS</h3>
                            <div className='shipping-container'>
                                <div className='input-container'>
                                    <input type="text" style={{ width: '232px'}} placeholder='First Name'/>
                                    <input type="text" style={{ width: '232px'}} placeholder='Last Name'/>
                                </div>

                                <input type="text" style={{ width: '482px'}} placeholder='Address Line'/>

                                <div className='input-container'>
                                    <input type="text" style={{ width: '345px'}} placeholder='Address Line 2'/>
                                    <input type="text" style={{ width: '121px'}} placeholder='Zip Code'/>
                                </div>

                                <div className='input-container'>
                                    <input type="text" style={{ width: '232px'}} placeholder='Province'/>
                                    <input type="text" style={{ width: '232px'}} placeholder='City'/>
                                </div>
                            </div>
                            <h3 style={{marginTop: '2rem'}}>PAYMENT INFORMATION</h3>
                            <div className='payment-container'>
                                <input type="text" style={{ width: '482px'}} placeholder='Card Number'/>
                                <div className='input-container'>
                                    <input type="text" style={{ width: '232px'}} placeholder='MM/YY'/>
                                    <input type="text" style={{ width: '232px'}} placeholder='CVC'/>
                                </div>
                            </div>

                            <div className='id-container' style={{marginTop: '2.5rem'}}>
                                <h2>Order ID: ####-####-####</h2>
                            </div>
                            <button className='form-submit'>ORDER</button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )

}

export default Cart