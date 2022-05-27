import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"

import AverageRating from "./AverageRating"
import DeleteAirlineButton from "./DeleteAirlineButton"
import "../assets/scss/styling/AirlineTile.scss"

const AirlineTile = ({ airline: { id, name, logoUrl, contactNumber } }) => {

  const [shouldRedirect, setShouldRedirect] = useState(false)

  const deleteAirline = async () => {
    try {
      const response = await fetch(`/api/v1/airlines/${id}`, {
        method: "DELETE"
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const responseBody = await response.json()
        setShouldRedirect(true)
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  if (shouldRedirect) {
    return <Redirect push to={`/airlines`} />
  }

  return (
    <div className="airline-tile cell small-12 large-7">
      <Link to={`/airlines/${id}`}>
        <h3>{name}</h3>
        <img className="index-logo" src={logoUrl} />
      </Link>
      <br/>
      <AverageRating airlineId={id} />
      <p> Customer Service: {contactNumber}</p>
      <DeleteAirlineButton deleteAirline={deleteAirline} />
    </div>
  )
}

export default AirlineTile
