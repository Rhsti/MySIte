import React from 'react'
import './Contactpages.css'
import Homeheader from '../components/Homeheader/Homeheader'
function Contactpages() {
  return (
    <>
    <Homeheader />  
    {/* <!-- main --> */}

    <main>
      <section id="contact" className="fade-section">
        <h2>Get in Touch</h2>
        <p>
          Have questions or want to learn more about our courses? Fill out the
          form below and our team will respond promptly.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea
            rows="5"
            placeholder="Your Message / Inquiry"
            required
          ></textarea>
          <button type="submit">Send Message</button>
          <p className="form-note">
            We respect your privacy and will never share your information.
          </p>
        </form>
      </section>
    </main>

    {/* <!-- footer --> */}
    <footer>
      <img src="/nmehar.png" alt="" />
      <section className="main-topfooter">
        <div className="container-topfooter">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <form action="">
            <input type="email" placeholder="Enter email address" required />
            <input className="sub" type="submit" value="Subscribe" />
          </form>
        </div>
      </section>
      <section className="social-md">
        <ul className="social-md-list">
          <li>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i className="fab fa-github"></i></a>
          </li>
          <li>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </li>
          <li>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </li>
        </ul>
      </section>
    </footer>
    </>
  )
}

export default Contactpages