import React, { useState } from "react"
import { Link } from "react-router-dom"

import "./HomePageNavBar.scss"

const HomePageNavBar = props => {
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
    <nav style={props.navColor}>
      <Link to="/" className="logo-link">
        <p className="flyco-logo">
          <img
            id="logo-pic"
            src="https://airlines-review-images.s3.us-west-2.amazonaws.com/flycoprologoV4.png"
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
          <Link to="/" className="active" onClick={props.removeNavBarColor}>
            Home
          </Link>
        </li>
        <li>
          <a onClick={props.removeNavBarColor} href="#about-us">
            About Us
          </a>
        </li>
        <li>
          <Link to="/airlines" onClick={props.addNavBarColor}>
            Airlines
          </Link>
        </li>
        <li>
          <Link to="/airlines" onClick={props.addNavBarColor}>
            Add an Airline
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default HomePageNavBar
