import React from "react"

import "./reviewIndex.scss"

const ReviewTile = ({ review: { reviewerName, numberOfStars, comment } }) => {
  return (
    <div className="review-container">
        <div className="cards">
          <div className="card">
            <div className="card-top">
              <div className="name">
                <div className="img one"></div>
                <p>{reviewerName}</p>
              </div>
              <div className="rate">{numberOfStars}</div>
            </div>
          </div>
          <div className="card-content">
            <p>{comment}</p>
          </div>
          <div className="card-action">
            <span>Date</span>
            <button className="btn">
              <i className="social-links"></i>
              <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
              <a href="https://www.twitter.com/" className="fa fa-twitter"></a>
              <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
              <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
            </button>
          </div>
        </div>
    </div>
  )
}

export default ReviewTile
