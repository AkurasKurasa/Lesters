import { createContext, useState } from "react"
import Flavors from "./Flavors.jsx"
import Home from "./Home.jsx"

import { Routes, Route } from "react-router-dom";

export const CartContext = createContext([]);

function App() { 

    const [cart, setCart] = useState([]);

    return (
        <>
            <CartContext.Provider value={[cart, setCart]}>
                
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/flavors" element={<Flavors />}/>
                </Routes>
            </CartContext.Provider>
        </>
    )

}

export default App