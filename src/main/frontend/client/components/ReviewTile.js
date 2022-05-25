
import React from "react"
import React from "react"
import NumberOfStars from "./NumberOfStars"

import "../assets/scss/foundation/reviewIndex.scss"
const ReviewTile = ({ review: { reviewerName, numberOfStars, comment } }) => {
  return (
    <div className="review-container cell small-12 large-10">
      <div className="card-top">
        <p className="name">{reviewerName}</p>
        <NumberOfStars numberOfStars={numberOfStars} />
      </div>
      <div className="comment-card">
      <p id="comment"> {comment}</p>
      </div>
    </div>
  )
}

export default ReviewTile
