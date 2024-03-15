import { useEffect, useState } from "react";
import { PropTypes } from 'prop-types'
import "../components/Sidecart_Item.css";

const Sidecart_Item = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    isSelected ? props.remove(props.name) : props.add(props.name, props.price, props.image);
  }, [isSelected]);

  return (
    <div className="item-container">
      <div className="item-info-container">
        <span style={{ backgroundImage: `url(${props.image})` }}></span>
        <h1>{props.name}</h1>
        <h2 className="item-price">{props.price.toFixed(2)}</h2>
        <div
          className={isSelected ? "item-selected" : "item-select"}
          onClick={() => {
            setIsSelected(!isSelected);
          }}
        ></div>
      </div>
    </div>
  );
}

Sidecart_Item.propTypes = {
    remove: PropTypes.func,
    add: PropTypes.func,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number
}

export default Sidecart_Item;
