import '../styles/Home.css'
import { useRef } from 'react'
import Card from '../components/Card.jsx'
import Footer from '../components/Footer.jsx'
import Sidecart from '../components/Sidecart.jsx'
import { Link } from 'react-router-dom'

function Home() {

  const sidecartRef = useRef()

  return (
    <>

      <Sidecart ref={sidecartRef}/>
      <main id='home'>
        <Highlight reference={sidecartRef} />
        <Best/>
        <Achievements />
        <Years />
        <Crave />
        <Newsletter />
      </main>
      
      <Footer />
    </>
  )
}

function Highlight(props) {

  return (
    <>
      <nav className="home-navigation-bar">
            <h1 className="logo">LESTERS</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/flavors">Flavors</Link>
                <li>Contact</li>
                <li onClick={() => props.reference.current.toggle()}>
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className='cart-item-count'>0</div>
                </li>
                <li>
                    <div className='theme-toggle-container'></div>
                </li>
                </ul>
        </nav>

      <section className="layout__header">
        <div className="header__container">
          <h1>Simple Ice Cream</h1>
          <h2>Bringing Unique Smiles</h2>
        </div>
        <button></button>
      </section>
    </>
  )

}

function Best(props) {

  return (

    <section className="layout__best">

        <h1>Try Our Best Sellers</h1>

        <div className="bestItems__container">

            <Card name='CHOCOLATE' id='chocolate' image={["https://iambaker.net/wp-content/uploads/2022/06/chocolate-ice-cream.jpg", 
                                                          "https://www.yourhomebasedmom.com/wp-content/uploads/2023/08/CHOCOLATE-ice-cream-9.jpg",
                                                          "https://carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg",
                                                          "https://www.modernhoney.com/wp-content/uploads/2020/09/No-Churn-Chocolate-Chunk-Ice-Cream-5-edit-scaled.jpg"]}/>

            <Card name="COOKIES N' CREAM" id='cookies-and-cream' image={["https://sugarspunrun.com/wp-content/uploads/2023/08/Cookies-and-cream-ice-cream-3-of-8.jpg",
                                                                        "https://www.yourhomebasedmom.com/wp-content/uploads/2020/06/cookies-and-cream-ice-cream-7.jpg",
                                                                        "https://www.chewoutloud.com/wp-content/uploads/2013/08/cookies-and-cream-in-white-bowl.jpg",
                                                                        "https://images.squarespace-cdn.com/content/v1/525d98f0e4b0f07bb3deb091/1595432470418-SNATOFZCZD5D99KYRFID/Classic+Cookies+and+Cream+Ice+Cream"]} />

            <Card name='STRAWBERRY' id='strawberry' image={["https://www.livinglou.com/wp-content/uploads/2013/06/the-best-homemade-strawberry-ice-cream.jpg",
                                                            "https://www.budgetbytes.com/wp-content/uploads/2022/06/No-Churn-Strawberry-Ice-Cream-V2.jpg",
                                                            "https://foodduchess.com/wp-content/uploads/2020/06/Strawberry-Cheesecake-Ice-Cream00039-1229x1536.jpg",
                                                            "https://getinspiredeveryday.com/wp-content/uploads/2023/06/Strawberry-Cheesecake-Ice-Cream-Get-Inspired-Everyday-11.jpg"]}/>

        </div>

        <Link to="/flavors">Find More flavors</Link>

      </section>
    
  )

}

function Achievements() {

  return (

    <section className="layout__achievements">

        <div className="achievements-container">

          <div className="achievements">
              <h1>2,000+</h1>
              <h2>ORDERS SERVED</h2>
          </div>

          <div className="achievements">
              <h1>4</h1>
              <h2>LOCATIONS</h2>
          </div>

          <div className="achievements">
              <h1>25</h1>
              <h2>FLAVORS</h2>
          </div>

          <div className="achievements">
              <h1>&#8734;</h1>
              <h2>SMILES GIVEN</h2>
          </div>

        </div>

      </section>

  )

}

function Years() {

  return (

    <section className="layout__years">

        <div className="years-rectangle rect-1"></div>
        <div className="years-rectangle rect-2"></div>
        <div className="years-rectangle rect-3"></div>

        <div className="years-rectangle rect-4"></div>
        <div className="years-rectangle rect-5"></div>
        <div className="years-rectangle rect-6"></div>
        
        <h1>20+ Years</h1>
        <h2>of bringing smiles</h2>
        <h2>with our</h2>
        <h1>Ice Cream</h1>

        <img className='ice-cream'></img>
        <img className='popsicle'></img>

    </section>

  )

}

function Crave() {

  const refreshFlavor = (type) => {
    const featured = document.getElementById("featured-flavor")
    featured.textContent = type
  }

  return (

    <section className="layout__crave">

        <h1>What are you craving?</h1>

        <div className="crave-container">

          <section className="cravings">

            <h1 onMouseEnter={() => refreshFlavor("exotic")}>Something <i>exotic</i>? </h1>
            <h1 onMouseEnter={() => refreshFlavor("random")}>Something <i>random?</i> </h1>
            <h1 onMouseEnter={() => refreshFlavor("nostalgic")}>Something <i>nostalgic?</i> </h1>
            <h1 onMouseEnter={() => refreshFlavor("tropical")}>Something <i>tropical?</i> </h1>
            <h1 onMouseEnter={() => refreshFlavor("classic")}>Something <i>classic?</i> </h1>

          </section>

          <section className="cravings-featured">
            <div id='featured-flavor'></div>
          </section>

        </div>

      </section>

  )

}

function Newsletter() {

  return (

    <section className="layout__newsletter">
        
        <h1>Want <br></br> Updates?</h1>

        <div className="newsletter-container">

          <h3>Subscribe to our newsletter!</h3>

          <form>

            <input type="email" placeholder="Enter email"></input>
            <button>Sign Up</button>

          </form>

          <p>Get notified about discounts, new <br></br> flavors, freebies, and much more.</p>

        </div>

      </section>

  )

}

export default Home
