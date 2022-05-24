import React from "react"
import { Link } from "react-router-dom"

const AirlineTile = ({ airline: { id, name, logoUrl, contactNumber } }) => {
  return (
      <div class=" airline-tile cell small-12 large-7">
        <Link to={`/airlines/${id}`}>
          <h3>{name}</h3>
          <img className="index-logo" src={logoUrl} />
        </Link>
          <p> Customer Service: {contactNumber}</p>
      </div>
  )
}

export default AirlineTile
