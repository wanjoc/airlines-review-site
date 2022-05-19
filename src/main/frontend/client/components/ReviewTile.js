import React from "react"

const ReviewTile = ({ review: { reviewerName, numberOfStars, comment } }) => {
  return (
    <li>
      <p>
        <strong>
          {reviewerName} {numberOfStars}
        </strong>
      </p>
      <p>{comment}</p>
    </li>
  )
}

export default ReviewTile
