import React, { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"

import ReviewsIndex from "./ReviewsIndex"

const AirlineShow = props => {
  let location = useLocation()
  const [airline, setAirline] = useState({reviews: []})
  const airlineId = props.match.params.id

  const fetchAirline = async () => {
    try {
      const response = await fetch(`/api/v1/airlines/${airlineId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setAirline(responseBody.airline)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchAirline()
  }, [location.pathname])

  return (
    <div>
      <h1 className="airline-title">{airline.name}</h1>
      <p className="airline-description">{airline.description}</p>
      <img
        className="airline-logoUrl"
        src={airline.logoUrl}
        alt={airline.name}
      />
      <p className="airline-headquarters">{airline.headquarters}</p>
      <p className="airline-contactNumber">{airline.contactNumber}</p>
      <ReviewsIndex reviews={airline.reviews} />
      <a className="airline-homepageUrl" href={airline.homepageUrl} target="_blank">
        {airline.name} Home Page
      </a>
      <br />
      <Link to={"/airlines"}>Back to airlines</Link> |{" "}
    </div>
  )
}

export default AirlineShow
