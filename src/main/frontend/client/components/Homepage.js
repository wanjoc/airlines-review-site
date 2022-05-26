import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "./scss/Homepage.scss"

const Homepage = () => {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="container">
      <section>
        <img
          id="airplane"
          style={{ transform: `translateX(${offsetY * 0.5}px)` }}
          src="https://airlines-review-images.s3.us-west-2.amazonaws.com/airplaneV3.png"
          alt="airplane on air"
        />
        <Link to="/airlines" id="btn">
          See Available Airlines
        </Link>
        <img
          style={{ transform: `translateX(${offsetY * -0.25}px)` }}
          id="clouds"
          src="https://airlines-review-images.s3.us-west-2.amazonaws.com/clouds.png"
          alt="clouds"
        />
      </section>
    </div>
  )
}

export default Homepage
