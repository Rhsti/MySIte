import React from 'react'
import './Loginpages.css'
import Homeheader from '../components/Homeheader/Homeheader'


function Loginpages() {
  return (
    <>
    <Homeheader />
     {/* <!-- main --> */}

    <main>
      {/* <!-- Popup Login Form --> */}
      <div id="loginModal" class="modal">
        <div class="modal-content">
          <h2>Login to Nmehar</h2>

          <form id="loginForm">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />

            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />

            <button type="submit">Login</button>
          </form>

          <div class="divider">
            <span>or sign in with</span>
          </div>

          <div class="social-login">
            <button class="google">
              <i class="fa-brands fa-google"></i> Google
            </button>
            <button class="facebook">
              <i class="fa-brands fa-facebook-f"></i> Facebook
            </button>
            <button class="github">
              <i class="fa-brands fa-github"></i> GitHub
            </button>
          </div>
        </div>
      </div>
    </main>

    {/* <!-- footer --> */}
    <footer>
      <img src="/nmehar.png" alt="" />
      <section class="main-topfooter">
        <div class="container-topfooter">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <form action="">
            <input type="email" placeholder="Enter email address" required />
            <input class="sub" type="submit" value="Subscribe" />
          </form>
        </div>
      </section>
      <section class="social-md">
        <ul class="social-md-list">
          <li>
            <a href="#"><i class="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-github"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </li>
        </ul>
      </section>
    </footer>
    </>
   
  )
}

export default Loginpages