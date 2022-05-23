import React from "react"
import NumberOfStars from "./NumberOfStars"

const ReviewTile = ({ review: { reviewerName, numberOfStars, comment } }) => {
  return (
    <li>
      <p>
        <strong>
          {reviewerName} 
          <NumberOfStars numberOfStars={numberOfStars} />
        </strong>
      </p>
      <p>{comment}</p>
    </li>
  )
}

export default ReviewTile
