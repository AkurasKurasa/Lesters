import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

import '../styles/Contact.css'

function Contact() {

    return (
        <>
            <Navbar />

            <main>

                <section className='layout_contact'>

                    <div class="bookmark"></div>

                    <h1>GOT A <span style={{textDecoration: 'underline'}}>FEEDBACK</span>?</h1>
                    <h2>LET US KNOW!</h2>

                    <div className='contacts-container'>
                        <h3>Contact us:</h3>
                        <span className='contact-option'></span>
                        <span className='contact-option'></span>
                        <span className='contact-option'></span>
                        <span className='contact-option'></span>
                    </div>

                    <form className='form-container'>
                        <input type="text" placeholder='Name' style={{width: '800px', height: '35px', padding: '0.5rem', marginBottom: '1rem' }}/>
                        <div className='input-container'>
                            <input type="text" placeholder='Email'  style={{width: '550px', height: '35px', padding: '0.5rem', marginBottom: '1rem' }}/>
                            <input type="text" placeholder='Message Type'  style={{width: '242px', height: '35px', padding: '0.5rem', marginBottom: '1rem' }}/>
                        </div>
                        <textarea type="text" placeholder='Message...'  style={{width: '800px', height: '220px', padding: '0.5rem', resize: 'none' }}/>

                        <button className='form-submit'>SUBMIT</button>
                    </form>

                </section>

            </main>
            
            <Footer />
        </>

    )

}

export default Contact