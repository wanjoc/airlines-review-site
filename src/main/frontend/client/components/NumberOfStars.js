import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"

import "../assets/scss/styling/NumberOfStars.scss"

const NumberOfStars = ({ numberOfStars }) => {
  
  const wholeStars = Math.floor(numberOfStars)
  const halfStars = numberOfStars - wholeStars

  const stars = []

  for (let i = 0; i < wholeStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className="color-orange"/>)
  }

  if(halfStars >= 0.5) {
    stars.push(<FontAwesomeIcon key={stars.length} icon={faStarHalf} className="color-orange"/>)
  }

  return <>{stars}</>
}

export default NumberOfStars
