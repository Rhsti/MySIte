import React from 'react'
import '../Header.css'

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
          <li><a href="index.html">Home</a></li>
          <li><a href="course.html">Course</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="nmharcontact.html" >Contact</a></li>
        </ul>
      </nav>

    <button id="hbtn"><a href="loginform.html">Login</a></button>
    {/* <span className="i"><i className="fa-solid fa-bars" style="color: white;"></i></span> */}
      
    </header>
    </>
  )
}

export default Homeheader