import { createContext, useState } from "react"
import Home from "./Home.jsx"

export const CartContext = createContext([]);

function App() { 

    const [cart, setCart] = useState( [] );

    return (
        <>
            <CartContext.Provider value={[cart, setCart]}>
                <Home />
            </CartContext.Provider>
        </>
    )

}

export default App