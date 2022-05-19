import React from "react"

const ReviewTile = ({ review: { reviewerName, numberOfStars, comment } }) => {
  return (
    <aside>
      <p>
        <strong>
          {reviewerName} {numberOfStars}
        </strong>
      </p>
      <p>{comment}</p>
    </aside>
  )
}

export default ReviewTile
