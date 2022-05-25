import React from "react"

import ReviewTile from "./ReviewTile"
import "../assets/scss/foundation/reviewIndex.scss"

const ReviewList = props => {
  const reviewTiles = props.reviews?.map(review => {
    return <ReviewTile key={review.id} review={review} />
  })

  return (
    <div>
      <h2>Reviews</h2>
      <div className="grid-x">
        {reviewTiles}
      </div>
    </div>
  )
}

export default ReviewList
