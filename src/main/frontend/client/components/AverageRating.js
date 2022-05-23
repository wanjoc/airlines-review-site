import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import NumberOfStars from "./NumberOfStars"

const AverageRating = ({ id }) => {
  let location = useLocation()
  const [averageRating, setAverageRating] = useState("")
  const airlineId = id

  const fetchAverageRating = async () => {
    try {
      const response = await fetch(`/api/v1/reviews/average/${airlineId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setAverageRating(responseBody.averageRating)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchAverageRating()
  }, [location.pathname])

  return(
    <NumberOfStars numberOfStars={averageRating}/>
  )
}

export default AverageRating
