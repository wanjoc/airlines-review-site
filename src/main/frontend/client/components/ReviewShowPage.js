import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

import NumberOfStars from "./NumberOfStars"

const ReviewShowPage = props => {
  library.add(fas)

  const [updatedReview, setUpdatedReview] = useState({
    reviewerName: "",
    airline: {
        id: ""
    }
  })
  const fetchReview = async () => {
    const reviewId = props.match.params.id
    try {
      const response = await fetch(`/api/v1/reviews/${reviewId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      console.log(responseBody.review)
      setUpdatedReview(responseBody.review)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchReview()
  }, [])

  return (
    <div className="cards cell small-12 large-10">
      <div className="card">
        <div className="card-top">
          <div className="name">
            <div className="reviewer-image one" alt="">
              {/* {updatedReview.reviewerName[0].toUpperCase()} */}
            </div>
            <p>{updatedReview.reviewerName}</p>
          </div>

          <div>
            <NumberOfStars numberOfStars={updatedReview.numberOfStars} />
          </div>
        </div>

        <div className="comment-card">
          <p id="comment"> {updatedReview.comment}</p>
        </div>
        <div className="card-action">
          <Link to={`/airlines/${updatedReview.airline.id}`}>Back</Link>
          <button className="btn">
            <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewShowPage
