import React from "react"

import ReviewTile from "./ReviewTile"

const ReviewList = props => {
  const reviewTiles = props.reviews?.map(review => {
    return <ReviewTile key={review.id} review={review} />
  })

  return (
    <div>
      <h2>Reviews</h2>
      <div>
        <ul>{reviewTiles}</ul>
      </div>
    </div>
  )
}

export default ReviewList
