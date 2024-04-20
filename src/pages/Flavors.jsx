import "../styles/Flavors.css";
import NavBar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";

import { useContext, useRef, useState } from "react";
import Sidecart from "../components/Sidecart.jsx";
import { ItemsContext } from "./App.jsx";

function Flavors() {
  const sidecartRef = useRef();

  return (
    <>
      <main id="flavors">
        <NavBar reference={sidecartRef} />
        <Sidecart ref={sidecartRef} />
        <Menu />
      </main>

      <Footer />
    </>
  );
}

function Menu() {

  const [items, setItems] = useContext(ItemsContext)

  const [bestFilter, setBestFilter] = useState(false)
  const [iceCreamFilter, setIceCreamFilter] = useState(false)
  const [sherbetFilter, setSherbetFilter] = useState(false)

  const best = items.filter((item) => { if ( item.best ) return item })
  const ice_cream = items.filter((item) => { if ( item.isIceCream ) return item })
  const sherbet = items.filter((item) => { if ( item.isSherbet ) return item })

  return (
    <section className="layout-flavors">
      <h1>FLAVORS</h1>
      <div className="flavors-options">
        <span 
          className={ bestFilter ? "chosen-tab" : "" } 
          onClick={() => {
              setBestFilter(!bestFilter)
              setIceCreamFilter(false)
              setSherbetFilter(false)                                                      
          }}>BEST SELLERS</span>
        <span 
          className={ iceCreamFilter ? "chosen-tab" : "" } 
          onClick={() => {
              setIceCreamFilter(!iceCreamFilter)
              setBestFilter(false)
              setSherbetFilter(false)
          }}>ICE CREAM</span>
        <span 
          className={ sherbetFilter ? "chosen-tab" : "" } 
          onClick={() => {
              setSherbetFilter(!sherbetFilter)
              setBestFilter(false)
              setIceCreamFilter(false)
          }}>SHERBET</span>
      </div>
      <div className="divider"></div>
      <div className="flavors-container">
        {(!bestFilter && !iceCreamFilter && !sherbetFilter) &&
          items.map((item) => (
            <Card 
              name={item.name}
              id={item.id}
              image={item.image}
            />
        ))}

        {bestFilter && 
          best.map((item) => (
            <Card 
              name={item.name}
              id={item.id}
              image={item.image}
            />
          ))
        }

        {iceCreamFilter &&
          ice_cream.map((item) => (
            <Card 
              name={item.name}
              id={item.id}
              image={item.image}
            />
          ))
        }

        {sherbetFilter &&
          sherbet.map((item) => (
            <Card 
              name={item.name}
              id={item.id}
              image={item.image}
            />
          ))
        }
        
      </div>
    </section>
  );
}

export default Flavors;
