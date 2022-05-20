import React from "react"

import ReviewTile from "./ReviewTile"

const ReviewList = props => {
  const reviewTiles = props.reviews?.map(review => {
    return <ReviewTile key={review.id} review={review} />
  })

  return (
    <div>
      <h2>Reviews</h2>
      <div className="input-field">
        <div className="search">
          <button type="submit" className="input-field">
            <i className="fas fa-search"></i>
            <input
              id="search"
              placeholder="Search for reviews ..."
              type="text"
            />
          </button>
        </div>
      </div>
      <ul>{reviewTiles}</ul>
    </div>
  )
}

export default ReviewList
