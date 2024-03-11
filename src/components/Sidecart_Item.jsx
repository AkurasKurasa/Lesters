import { forwardRef, useEffect, useLayoutEffect, useState } from "react"
import "../components/Sidecart_Item.css"

function Sidecart_Item (props) {

    const [ isSelected, setIsSelected ] = useState(false);

    useLayoutEffect(() => {
        (isSelected) ? props.remove(props.name) : props.add(props.name, props.price)
    }, [isSelected])

    return (

        <div className='item-container'>
                    <div className='item-info-container'>
                        <span style={{backgroundImage: `url(${props.image})`}}></span>
                        <h1>{props.name}</h1>
                        <h2 className="item-price">{props.price.toFixed(2)}</h2>
                        <div 
                        className={ isSelected ? 'item-selected' : 'item-select' }
                        onClick={ () => { setIsSelected(!isSelected) } }>
                        </div>
                    </div>
        </div>

    )

} 

export default Sidecart_Item