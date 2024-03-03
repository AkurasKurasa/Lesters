import { forwardRef, useContext, useImperativeHandle, useState } from 'react'
import { CartContext } from '../pages/App'
import './ProductModal.css'

const ProductModal = forwardRef((props, ref) => { 

    const [ cartItems, setCartItems ] = useContext(CartContext)

    return (

      <>
        <div className="overlay" onClick={ (event) => {

          if ( event.target.className == "overlay" ) {
            props.toggle()
          }

        }}>
          <div className="modal">
              <section className='modal-images' style={ {backgroundImage: `url('${props.image}')` } }></section>
              <section className='modal-info'>
                  <h1 className='product-name'>{props.name}</h1>
                  <p className='product-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit sed ligula pulvinar semper. Donec imperdiet bibendum mi, ut accumsan lorem  bibendum id. Ut sed metus et nisi vehicula cursus at eu erat. Suspendisse potenti. Vivamus neque risus, laoreet nec tincidunt et,  viverra vitae ante.</p>
                  <h2 className='product-price'>₱300.00 / <b><u>gallon</u></b> </h2>
                  <div className='controls-container'>

                      <div className="quantity-input">
                          <span className="quantity-increase">+</span>
                          <span className="quantity-decrease">-</span>
                          0
                      </div>
                      <button className='add-to-cart-btn'>ADD TO CART</button>
                      <button className='order-btn'>ORDER</button>

                  </div>
                  <h2 className="order-price">₱0.00</h2>
              </section>
          </div>
        </div>
      </>
    )
})
  
  export default ProductModal