import React from 'react'
import Homeheader from '../components/Homeheader/Homeheader'
import './Aboutpages.css'

function Aboutpages() {
  return (
   <>
   <Homeheader />
    {/* <!-- main --> */}
    <main>
      <section id="about" className="fade-section">
        <div className="about-img">
          <img
            src="https://popevents.ca/wp-content/uploads/2019/07/team-building-teachers.jpg"
            alt="Our Team"
          />
        </div>
        <div className="about-content">
          <h2>About Nmehar Academy</h2>
          <p>
            Nmehar Academy is dedicated to providing high-quality, practical
            learning experiences for students and professionals alike. Our goal
            is to equip learners with the knowledge and skills needed to excel
            in today’s competitive environment.
          </p>
          <p>
            Our team of experienced instructors brings industry expertise and a
            hands-on approach to every course, ensuring that learners gain not
            just theoretical knowledge but practical, applicable skills. We are
            committed to fostering growth, creativity, and lifelong learning for
            all our students.
          </p>
          <p>
            Join Nmehar Academy and take the next step in your professional
            journey with confidence.
          </p>
        </div>
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

export default Aboutpages