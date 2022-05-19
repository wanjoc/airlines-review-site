import React from "react"

import ReviewTile from "./ReviewTile"

const ReviewList = props => {
  const reviewTiles = props.reviews?.map(review => {
    return <ReviewTile key={review.id} review={review} />
  })

  return (
    <div>
      <h2>Reviews</h2>
      <ul>{reviewTiles}</ul>
    </div>
  )
}

export default ReviewList
