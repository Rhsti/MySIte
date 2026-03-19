import React from 'react'
import Homeheader from '../components/Homeheader/Homeheader'
import './Homepages.css'
function Homepages() {
  return (
    <>
    <Homeheader />
     <div className="main">
      {/* <!-- section --> */}
        <div className="head-container">
         
<section>
  <div className="getStart">
    <p className="headpra">Find the best courses for you.</p>
    <p className="notheadpra">Upgrade your skills with top-rated online courses and expert instructors.</p>
    <button className="getsbutton" onclick="location.href='course.html'">Explore Courses</button>
  </div>
  <img className="banner" src="./public/images/banner.png" alt="Learning banner" />
</section>
        </div>
    {/* main */}
        <div className="main-container">
          <main>
            <h1>Welcome to Nmehar</h1>
            <p>
              Welcome to <strong>Nmehar Academy</strong> — where learning meets innovation.  
              We are dedicated to providing high-quality, practical education designed to empower students and professionals alike.  
              Our mission is to bridge the gap between knowledge and application, helping you develop real-world skills that matter.  
            </p>
            <p>
              With a team of experienced instructors, modern learning tools, and a supportive community,  
              we ensure that every learner achieves growth, confidence, and career advancement.  
              Join us today and take the next step toward a brighter, more skilled future.
            </p>

            <h1>Our Services</h1>
            <p>
              At Nmehar, we offer a wide range of professional training programs and development services  
              tailored to meet individual and organizational needs. From beginner courses to advanced workshops,  
              our services are designed to help learners acquire valuable, in-demand skills.
            </p>
            <p>
              We specialize in instructor-led training, online learning, and hands-on project sessions —  
              all aimed at ensuring you gain both theoretical understanding and practical expertise.  
              Our commitment is to deliver learning experiences that inspire, engage, and transform.
            </p>

            <div className="services">
              <div className="card">
                <span><i className="fa-solid fa-person-chalkboard"></i>Instructor Led</span>
                <p>We provide one of the best instructor led online trainings in London.</p>
                <button><a href="course.html">Find out more</a></button>
              </div>
              <div className="card">
                <span><i className="fa-solid fa-people-group"></i>Group Projects</span>
                <p>We provide one of the best instructor led online trainings in London.</p>
                <button><a href="course.html">Find out more</a></button>
              </div>
              <div className="card">
                <span><i className="fa-solid fa-certificate"></i>Certification</span>
                <p>We provide one of the best instructor led online trainings in London.</p>
                <button><a href="course.html">Find out more</a></button>
              </div>
            </div>
          </main>
        </div>
       </div> 
 {/* <!-- footer --> */}
       <footer>
      <section className="main-topfooter">
        <div className="container-topfooter">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <form action="">
          <input type="email" placeholder="Enter email address" required/>
          <input className="sub" type="submit" value="Subscribe"/>
          </form>
        </div>
      </section>
      <section className="social-md">
        <ul className="social-md-list">
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-github"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="#"><i className="fab fa-youtube"></i></a></li>
        </ul>
      </section>

    <section className="copy">
     <span>
     <span><a href="">Term & Conditions</a></span>
     <span><a href=""> Privacy Policy</a></span>
     </span>
     <p> &copy; 2023 Copyright Nmehar.com</p>
    </section>
       </footer>
    </>
  )
}

export default Homepages