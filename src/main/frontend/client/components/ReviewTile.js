import React, { useState } from "react"
import { Redirect } from "react-router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

import NumberOfStars from "./NumberOfStars"
import DeleteReviewButton from "./DeleteReviewButton"
import EditReviewButton from "./EditReviewButton"

import "../assets/scss/styling/ReviewTile.scss"

const ReviewTile = ({
  airlineId,
  review: { reviewerName, numberOfStars, comment, id }
}) => {
  library.add(fas)

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
    return <Redirect push to={`/airlines/${airlineId}`} />
  }

  return (
    <div className="cards cell small-12 large-10">
      <div className="card">
        <div className="card-top">
          <div className="name">
            <div className="reviewer-image one" alt="">
              {reviewerName[0].toUpperCase()}
            </div>
            <p>{reviewerName}</p>
          </div>

          <div>
            <NumberOfStars numberOfStars={numberOfStars} />
          </div>
        </div>

        <div className="comment-card">
          <p id="comment"> {comment}</p>
        </div>
        <div className="card-action">
          <div className="delete-edit-btns">
            <DeleteReviewButton deleteReview={deleteReview} />
            <EditReviewButton id={id} />
          </div>
          <button className="btn">
            <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewTile
