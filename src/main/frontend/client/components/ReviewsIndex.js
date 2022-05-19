import React from "react"

import ReviewTile from "./ReviewTile"

const ReviewsIndex = props => {
  const reviewTiles = props.reviews?.map(review => {
    return <ReviewTile key={review.id} airline={review} />
  })

  return (
    <div>
      <h2>Reviews</h2>
      {reviewTiles}
    </div>
  )
}

export default ReviewsIndex
