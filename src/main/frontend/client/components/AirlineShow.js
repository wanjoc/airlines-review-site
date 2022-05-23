import React, { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"

import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"

const AirlineShow = props => {
  let location = useLocation()
  const [airline, setAirline] = useState({ reviews: [] })
  const [showReviewForm, setShowReviewForm] = useState(false)
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

  const handleClick = e => {
    setShowReviewForm(!showReviewForm)
  }

  const keepReviewFormOpen = output => {
    window.location.reload()
  }

  return (
    <>
      <h1 className="airline-title">{airline.name}</h1>
      <button onClick={handleClick}>Add A Review</button>
      {showReviewForm && <ReviewForm airlineId={airline.id} keepReviewFormOpen={keepReviewFormOpen} />}
      <p className="airline-description">{airline.description}</p>
      <img
        className="airline-logoUrl"
        src={airline.logoUrl}
        alt={airline.name}
      />
      <p className="airline-headquarters">{airline.headquarters}</p>
      <p className="airline-contactNumber">{airline.contactNumber}</p>
      <ReviewList reviews={airline.reviews} />
      <a
        className="airline-homepageUrl"
        href={airline.homepageUrl}
        target="_blank"
      >
        {airline.name} Home Page
      </a>
      <br />
      <Link to={"/airlines"}>Back to airlines</Link> |{" "}
    </>
  )
}

export default AirlineShow
