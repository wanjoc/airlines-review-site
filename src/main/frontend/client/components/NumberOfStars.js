import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

import "../assets/scss/main.scss"

const NumberOfStars = ({ numberOfStars }) => {
  const stars = []

  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className="color-orange"/>)
  }

  return <>{stars}</>
}

export default NumberOfStars
