import React from "react"

import "./scss/DeleteReviewButton.scss"

const DeleteReviewButton = props => {
  const handleDelete = e => {
    e.preventDefault()
    props.deleteReview()
  }
  return <button className="delete-btn" onClick={handleDelete}>Delete this review</button>
}

export default DeleteReviewButton