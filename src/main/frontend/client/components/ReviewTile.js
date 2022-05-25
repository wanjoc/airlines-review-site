import React, { useState } from "react"
import { Redirect } from "react-router"
import NumberOfStars from "./NumberOfStars"

import DeleteReviewButton from "./DeleteReviewButton"
import "./reviewIndex.scss"

const ReviewTile = ({
  review: { reviewerName, numberOfStars, comment, id }
}) => {
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
    <div>
      <li>
        <p>
          <strong>
            {reviewerName}
            <NumberOfStars numberOfStars={numberOfStars} />
          </strong>
        </p>
        <p>{comment}</p>
      </li>
      <DeleteReviewButton deleteReview={deleteReview} />
    </div>
  )
}

export default ReviewTile
