import React, { HTMLComment } from "react"

import "../assets/scss/foundation/reviewIndex.scss"
const ReviewTile = ({ review: { reviewerName, numberOfStars, comment } }) => {
  return (
    <div className="review-container cell small-12 large-10">
      <div className="card-top">
        <p className="name">{reviewerName}</p>
        <p className="rate">{numberOfStars}</p>
      </div>
      <div className="comment-card">
      <p id="comment"> {comment}</p>
      </div>
    </div>
  )
}

export default ReviewTile
