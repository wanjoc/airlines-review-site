import React from "react"
import { Link } from "react-router-dom"
import AverageRating from "./AverageRating"

const AirlineTile = ({ airline: { id, name } }) => {
  return (
    <>
      <Link to={`/airlines/${id}`}>
        <h2>{name}</h2>
      </Link>
      <AverageRating airlineId={id}/>
    </>
  )
}

export default AirlineTile
