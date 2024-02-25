import { useEffect, useState } from 'react'
import '../components/Card.css'
import ProductModal from './ProductModal'

function Card(props) {

    const [isPressed, setIsPressed] = useState(false)

    function toggle() {

      setIsPressed(!isPressed)

    }

    return (
        <>
          { isPressed && <ProductModal toggle={toggle} name={props.name} /> }
          <article className="best-item" id={props.id}>
              <section className="best-item-image"></section>
                <section className="best-item-bottom-portion regular">
                  <span className="best-item-name">{props.name}</span>
                  <button className="best-item-button" onClick={toggle}>ORDER</button>
                </section>
          </article>
        </>

    )

}

export default Card