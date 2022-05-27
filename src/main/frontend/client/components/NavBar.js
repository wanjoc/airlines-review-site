import React, { useState } from "react"
import { Link } from "react-router-dom"

import "../assets/scss/styling/NavBar.scss"

const NavBar = () => {
  const [showResponsiveNavBar, setShowResponsiveNavBar] = useState(false)

  let className = "navigation-menu-expanded"
  const handleClick = () => {
    setShowResponsiveNavBar(!showResponsiveNavBar)
  }

  if (showResponsiveNavBar) {
    className = "navigation-menu-expanded"
  } else {
    className = "navigation-menu"
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <p className="flyco-logo">
            <img
              id="logo-pic"
              src="https://airlines-review-images.s3.us-west-2.amazonaws.com/flycoprologoV5.png"
              alt="flyco pro logo"
            />
          </p>
        </Link>
        <a onClick={handleClick} className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>

        <ul className={className}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/airlines/about-us">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/airlines">Airlines</Link>
          </li>
          <li>
            <Link to="/airlines/new">Add an Airline</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
