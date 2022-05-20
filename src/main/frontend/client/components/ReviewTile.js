import React from "react"

import "./reviewIndex.scss"

const ReviewTile = ({ review: { reviewerName, numberOfStars, comment } }) => {
  return (
    <li className="review-container">
      <p>
        <div className="cards">
        <div class="card">
            <div class="card-top">
                <div class="name">
                    <div class="img one" alt=""></div>
                    <p>{reviewerName}</p>
                </div>
                <div class="rate">
                {numberOfStars}
                </div>
              </div>
            </div>
            <div class="card-content">
            <p>{comment}</p>
            </div>
            <div class="card-action">
                <span>Date</span>
                <button class="btn">
                    <i class="fas fa-external-link-alt"></i>
                    Share
                </button>
            </div>
        </div>
      </p>
      
    </li>
  )
}

export default ReviewTile
