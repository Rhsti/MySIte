import React from 'react'
import '../Header.css'
import { Link } from 'react-router'

function Homeheader() {
  return (
    <>
    {/* <!--  header --> */}
    <header>
      <span>
        <img className="nmhar" src="./public/images/nmehar.png" alt="" />
      </span>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/course">Course</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

    <button id="hbtn"><Link to="loginform.html">Login</Link></button>
    {/* <span className="i"><i className="fa-solid fa-bars" style="color: white;"></i></span> */}
      
    </header>
    </>
  )
}

export default Homeheader