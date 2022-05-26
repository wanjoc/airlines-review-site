import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"

import "./scss/AirlineShow.scss"

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
    <div className="show-page grid-container">
      <h1 className="airline-title">
        <span>
          <img
            className="airline-logoUrl"
            src={airline.logoUrl}
            alt={airline.name}
          />
        </span>
        {airline.name}
      </h1>
      <p className="airline-description">{airline.description}</p>

      <p className="airline-headquarters">Location: {airline.headquarters}</p>
      <p className="airline-contactNumber">
        Phone Number: {airline.contactNumber}
      </p>
      <a
        className="airline-homepageUrl"
        href={airline.homepageUrl}
        target="_blank"
      >
        Visit {airline.name} Website
      </a>
      <br />
      <button className="leave-review-button" onClick={handleClick}>
        Leave a Review
      </button>
      {showReviewForm && (
        <div className="from">
          <ReviewForm
            airlineId={airline.id}
            keepReviewFormOpen={keepReviewFormOpen}
          />
        </div>
      )}

      <ReviewList reviews={airline.reviews}/>
    </div>
  )
}

export default AirlineShow
