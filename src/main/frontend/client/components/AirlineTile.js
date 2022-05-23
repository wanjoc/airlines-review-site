import React from "react"
import { Link } from "react-router-dom"
import AverageRating from "./AverageRating"
import NumberOfStars from "./NumberOfStars"

const AirlineTile = ({ airline: { id, name } }) => {
  return (
    <>
      <Link to={`/airlines/${id}`}>
        <h2>{name}</h2>
      </Link>
      <AverageRating id={id}/>
    </>
  )
}

export default AirlineTile
