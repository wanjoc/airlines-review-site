import React, { useState } from "react"
import { Redirect } from "react-router"
import NumberOfStars from "./NumberOfStars"
import DeleteReviewButton from "./DeleteReviewButton"
// import "./reviewIndex.scss"
// import "./scss/reviewIndex.scss"

const ReviewTile = ({ review: { reviewerName, numberOfStars, comment, id } }) => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const deleteReview = async () => {
    try {
      const response = await fetch(`/api/v1/reviews/${id}`, {
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
    return <Redirect push to={`/airlines/${id}`} />
  }

  return (
    <div className="review-container cell small-12 large-10">
      <div className="card-top">
        <p className="name">{reviewerName}</p>
        <div >
        <NumberOfStars numberOfStars={numberOfStars} />
        </div>
      </div>
      <div className="comment-card">
        <p id="comment"> {comment}</p>
      </div>
      <DeleteReviewButton deleteReview={deleteReview} />
    </div>
  )
}

export default ReviewTile
