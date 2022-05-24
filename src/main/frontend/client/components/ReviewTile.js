import React from "react"

import DeleteReviewButton from "./DeleteReviewButton"
import "./reviewIndex.scss"

const ReviewTile = ({
  review: { reviewerName, numberOfStars, comment, id }
}) => {
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
        window.location.reload(true)
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  return (
    <div className="review-container">
      <div className="cards">
        <div className="card">
          <div className="card-top">
            <p className="name">{reviewerName}</p>
            <p className="rate">{numberOfStars}</p>
          </div>
        </div>
        <div className="card-content">
          <p>{comment}</p>
        </div>
        <div className="card-action">
          <span></span>
          <button className="btn">
            <i className="social-links"></i>
            <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
            <a href="https://www.twitter.com/" className="fa fa-twitter"></a>
            <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
            <a
              href="https://www.instagram.com/"
              className="fa fa-instagram"
            ></a>
          </button>
          <DeleteReviewButton deleteReview={deleteReview} />
        </div>
      </div>
    </div>
  )
}

export default ReviewTile
