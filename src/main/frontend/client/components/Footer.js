import React from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import "../assets/scss/styling/Footer.scss"

const Footer = () => {
  library.add(fas, far, fab)

  return (
    <footer id="social-links">
      <div className="row">
        <div className="col">
          <img
            className="logo"
            src="https://airlines-review-images.s3.us-west-2.amazonaws.com/flycoprologoV5.png"
            alt="flyco pro logo"
          />
          <p>
            Subscribe to Flyco Pro to get the latest updates.
          </p>
        </div>
        <div className="col">
          <h3 id="headquarters">Headquarters <div className="underline"><span></span></div></h3>
          <p>Wonderland Road</p>
          <p>Chicago, Illinois 60661</p>
          <p className="email-id">flycopro@fly.com</p>
          <p>123-456-7890</p>
        </div>
        <div className="col">
          <h3 id="links">Links <div className="underline"><span></span></div></h3>
          <ul>
            <li>
              <Link className="links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="links" to="/airlines/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="links" to="/airlines">
                Airlines
              </Link>
            </li>
            <li>
              <Link className="links" to="/airlines/new">
                Add Airline
              </Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3 id="newsletter">Newsletter <div className="underline"><span></span></div></h3>
          <form className="newsletter-form">
            <FontAwesomeIcon icon="fa-regular fa-envelope" />
            <input className="email-form" type="email" placeholder="Enter your email" required />
            <button className="arrow-button">
              <FontAwesomeIcon className="fas" icon="fa-solid fa-arrow-right" />
            </button>
          </form>
          <div className="social-icons">
            <FontAwesomeIcon className="fab" icon="fa-brands fa-facebook-f" />
            <FontAwesomeIcon className="fab" icon="fa-brands fa-twitter" />
            <FontAwesomeIcon className="fab" icon="fa-brands fa-instagram" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <p className="copyright">FlyCo Pro © 2022 - All Rights Reserved</p>
    </footer>
  )
}

export default Footer
