import { useState } from "react";
import { PropTypes } from 'prop-types'
import "../components/Card.css";
import ProductModal from "./ProductModal";

const Card = (props) => {
  const [isPressed, setIsPressed] = useState(false);

  function toggle() {
    setIsPressed(!isPressed);
  }

  return (
    <>
      {isPressed && (
        <ProductModal toggle={toggle} name={props.name} image={props.image} />
      )}
      <article className="best-item" id={props.id}>
        <section className="best-item-image"></section>
        <section className="best-item-bottom-portion regular">
          <span className="best-item-name">{props.name}</span>
          <button className="best-item-button" onClick={toggle}>
            ORDER
          </button>
        </section>
      </article>
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.array,
  id: PropTypes.string
}

export default Card;
