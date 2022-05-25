import React from "react"
import { Link } from "react-router-dom"
import AverageRating from "./AverageRating"

const AirlineTile = ({ airline: { id, name, logoUrl, contactNumber } }) => {
  return (
    <div className=" airline-tile cell small-12 large-7">
      <Link to={`/airlines/${id}`}>
        <h3>{name}</h3>
        <img className="index-logo" src={logoUrl} />
      </Link>
      <br/>
      <AverageRating airlineId={id} />
      <p> Customer Service: {contactNumber}</p>
    </div>
  )
}

export default AirlineTile
