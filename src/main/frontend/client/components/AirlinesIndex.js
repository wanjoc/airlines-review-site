import React, { useEffect, useState } from "react"

import AirlineTile from "./AirlineTile"

import "./scss/AirlineIndex.scss"

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
    <div className="airline-index-container">
      <h5 className="quote">"It's the old adage: You can make a pizza so cheap, nobody will eat it. You can make an airline so cheap, nobody will fly it."</h5>
      <p className="quote-author">Gordon Bethune</p>
      <div className="grid-x">
      {airlineTiles}
      </div>
    </div>
  )  
}

export default AirlinesIndex
