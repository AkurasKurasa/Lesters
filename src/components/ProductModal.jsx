import {
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { PropTypes } from 'prop-types'
import { CartContext } from "../pages/App";
import "./ProductModal.css";

const ProductModal = forwardRef((props) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(quantity * 300);
  }, [quantity]);

  function add(keyName) {
    const foundFlavor = cartItems.find((flavor) => flavor.name == keyName);

    if (!foundFlavor) {
      setCartItems((prev) => [
        ...prev,
        { name: props.name, price: price, image: props.image[1] },
      ]);
    } else {
      setCartItems(
        cartItems.map((items) => {
          if (items.name == keyName) {
            items.price = price;
          }

          return items;
        }),
      );
    }

    setQuantity(0);
    props.toggle();
  }

  return (
    <>
      <div
        className="overlay"
        onClick={(event) => {
          if (event.target.className == "overlay") {
            props.toggle();
          }
        }}
      >
        <div className="modal">
          <section
            className="modal-images"
            style={{ backgroundImage: `url('${props.image[imageIndex]}')` }}
          >
            <div
              className="previous-image"
              onClick={() => {
                imageIndex > 0
                  ? setImageIndex((imageIndex - 1) % 4)
                  : setImageIndex(3);
              }}
            ></div>
            <div
              className="next-image"
              onClick={() => setImageIndex((imageIndex + 1) % 4)}
            ></div>
          </section>
          <section className="modal-info">
            <h1 className="product-name">{props.name}</h1>
            <p className="product-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              elit sed ligula pulvinar semper. Donec imperdiet bibendum mi, ut
              accumsan lorem bibendum id. Ut sed metus et nisi vehicula cursus
              at eu erat. Suspendisse potenti. Vivamus neque risus, laoreet nec
              tincidunt et, viverra vitae ante.
            </p>
            <h2 className="product-price">
              ₱300.00 /{" "}
              <b>
                <u>gallon</u>
              </b>{" "}
            </h2>
            <div className="controls-container">
              <div className="quantity-input">
                <span
                  className="quantity-increase"
                  onClick={() => {
                    quantity == 10
                      ? setQuantity(quantity)
                      : setQuantity(quantity + 1);
                  }}
                >
                  +
                </span>
                <span
                  className="quantity-decrease"
                  onClick={() => {
                    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
                  }}
                >
                  -
                </span>
                {quantity}
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => add(props.name)}
                disabled={(quantity == 0)}
              >
                ADD TO CART
              </button>
              <button 
                className="order-btn"
                disabled={(quantity == 0)}
              >
                ORDER
              </button>
            </div>
            <h2 className="order-price">₱{price.toFixed(2)}</h2>
          </section>
        </div>
      </div>
    </>
  );
});

ProductModal.displayName = "ProductModal";
ProductModal.propTypes = {
  name: PropTypes.string,
  image: PropTypes.oneOf(["image1", "image2"]),
  toggle: PropTypes.func
};

export default ProductModal;
