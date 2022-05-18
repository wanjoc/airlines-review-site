import React, { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"

const AirlineShow = props => {
  let location = useLocation()
  const [airline, setAirline] = useState({})
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
      <h1>{airline.name}</h1>
      <p>{airline.description}</p>
      <p>{airline.logoUrl}</p>
      <p>{airline.headquarters}</p>
      <p>{airline.contactNumber}</p>
      <p>{airline.homepageUrl}</p>
      <Link to={"/airlines"}>Back to airlines</Link> |{" "}
    </div>
  )
}

export default AirlineShow
