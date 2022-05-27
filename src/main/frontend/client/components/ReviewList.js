import React from "react"

import ReviewTile from "./ReviewTile"

import "../assets/scss/styling/ReviewList.scss"

const ReviewList = props => {
  const reviewTiles = props.reviews?.map(review => {
    return <ReviewTile airlineId={props.airlineId} fetchAirline={props.fetchAirline} key={review.id} review={review} />
  })

  return (
    <div>
      <div className="reviews-container grid-x">
        <h2 className="title">Reviews</h2>
        <label htmlFor="search" className="input-field">
          <input id="search" placeholder="Search for reviews ..." type="text" />
        </label>
        <div className="suggest">
          <span>experience</span>
          <span>quality</span>
          <span>design</span>
          <span>features</span>
          <span>values</span>
        </div>
        <div className="review-tiles">{reviewTiles}</div>
      </div>
    </div>
  )
}

export default ReviewList
