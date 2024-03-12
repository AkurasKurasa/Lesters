import "../styles/Flavors.css";
import NavBar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";

import { useRef } from "react";
import Sidecart from "../components/Sidecart.jsx";

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
  return (
    <section className="layout-flavors">
      <h1>FLAVORS</h1>
      <div className="flavors-options">
        <span className="current-tab">BEST SELLERS</span>
        <span>ICE CREAM</span>
        <span>SHERBET</span>
      </div>
      <div className="divider"></div>
      <div className="flavors-container">
        <Card name="COOKIES N' CREAM" id="cookies-and-cream" />
        <Card name="MELON" id="melon" />
        <Card name="BUKO" id="buko" />

        <Card name="BUKO PANDAN" id="buko-pandan" />
        <Card name="LANGKA" id="langka" />
        <Card name="UBE" id="ube" />

        <Card name="MANGO" id="mango" />
        <Card name="MACAPUNO" id="macapuno" />
        <Card name="AVOCADO" id="avocado" />

        <Card name="CHOCOLATE" id="chocolate" />
        <Card name="CHEESE" id="cheese" />
        <Card name="STRAWBERRY" id="strawberry" />
      </div>
    </section>
  );
}

export default Flavors;
