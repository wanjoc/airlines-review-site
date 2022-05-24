import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import AirlineTile from "./AirlineTile"

const AirlinesIndex = () => {
  const [airlines, setAirlines] = useState([])

  const fetchAirlines = async () => {
    try {
      const response = await fetch("/api/v1/airlines")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setAirlines(responseBody.airlines)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchAirlines()
  }, [])

  const airlineTiles = airlines.map(airline => {
    return <AirlineTile key={airline.id} airline={airline} />
  })

  return(
    <>
      <h1>All Airlines</h1>
      {airlineTiles}
      <Link to={"/airlines/new"}>Add a new Airline</Link>
    </>
  )  
}

export default AirlinesIndex
