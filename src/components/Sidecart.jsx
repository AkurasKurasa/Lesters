import "../components/Sidecart.css";
import Sidecart_Item from "./Sidecart_Item";
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { CartContext } from "../pages/App";

const Sidecart = forwardRef((props, ref) => {
  const [productList, setProductList] = useContext(CartContext);
  const [temporaryList, setTemporaryList] = useState(productList);

  useEffect(() => {
    setTemporaryList(productList);
  }, [productList]);

  useImperativeHandle(ref, () => ({
    toggle() {
      const sidecart = document.querySelector(".sidecart");
      sidecart.style.transform = "translateX(0%)";

      let handler = (event) => {
        if (!event.composedPath().includes(sidecart)) {
          sidecart.style.transform = "translateX(100%)";
          document.removeEventListener("mousedown", handler);
        }
      };

      document.addEventListener("mousedown", handler);
    },
  }));

  function addItemToCart(name, price) {
    const new_temporary_list = temporaryList;
    if (
      !new_temporary_list.includes(
        new_temporary_list.find((p) => p.name === name),
      )
    )
      new_temporary_list.push({ name: name, price: price });
    setTemporaryList(new_temporary_list);
    console.log(temporaryList);
  }

  function removeItemFromCart(name) {
    const filtered_items = temporaryList.filter((product) => {
      if (product.name != name) return product;
    });
    setTemporaryList(filtered_items);
    console.log(temporaryList);
  }

  return (
    <section className="sidecart">
      <h1>CART</h1>

      <div className="items-container">
        {productList.map((product, index) => (
          <Sidecart_Item
            key={product.name}
            id={index}
            name={product.name}
            image={product.image}
            price={product.price}
            add={addItemToCart}
            remove={removeItemFromCart}
          />
        ))}
      </div>

      <div className="control-container">
        <button className="cart-checkout">CHECKOUT</button>
        <span
          className="delete-items"
          onClick={() => setProductList(temporaryList)}
        ></span>
      </div>
    </section>
  );
});

Sidecart.displayName = "Sidecart";

export default Sidecart;
