import React from 'react'
import './Coursepages.css'
import Homeheader from '../components/Homeheader/Homeheader'
function Coursepages() {
  return (
    <>
       <Homeheader />
      {/* <!-- main --> */}

    <main>
      <section id="course" className="fade-section">
        <div className="course-grid">
          <div className="course-card">
            <img
              src="https://miro.medium.com/0*M4bxiCIjcTK-2Xr6.jpeg"
              alt="Web Development"
            />
            <div className="course-content">
              <h3>Web Development</h3>
              <p>
                Build modern, responsive websites using HTML, CSS, and
                JavaScript. Gain hands-on experience with real-world projects.
              </p>
            </div>
          </div>
          <div className="course-card">
            <img
              src="https://www.brainwonders.in/blog_feature_images/2022/12/2022-12-10-11-11-46Graphic_Design_Courses.png"
              alt="Graphic Design"
            />
            <div className="course-content">
              <h3>Graphic Design</h3>
              <p>
                Learn design principles, typography, and color theory. Create
                stunning visuals using industry-standard tools.
              </p>
            </div>
          </div>
          <div className="course-card">
            <img
              src="https://rooman.net/wp-content/uploads/2021/11/python-programing-banner.jpg"
              alt="Python Programming"
            />
            <div className="course-content">
              <h3>Python Programming</h3>
              <p>
                Develop practical programming skills for data analysis,
                automation, and AI projects. Ideal for beginners and
                professionals.
              </p>
            </div>
          </div>
          <div className="course-card">
            <img
              src="https://www.monash.edu/__data/assets/image/0006/3997950/illustration-digital-marketing.jpg"
              alt="Digital Marketing"
            />
            <div className="course-content">
              <h3>Digital Marketing</h3>
              <p>
                Master SEO, social media, and content marketing strategies. Grow
                brands online effectively and measure results.
              </p>
            </div>
          </div>
          <div className="course-card">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*u4EBes6Muu2fy7iM8igMug.jpeg"
              alt="Project Management"
            />
            <div className="course-content">
              <h3>Project Management</h3>
              <p>
                Learn planning, execution, and team coordination skills. Manage
                projects efficiently using real-world tools and techniques.
              </p>
            </div>
          </div>
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

export default Coursepages