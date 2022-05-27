import React from "react"

import "../assets/scss/styling/DeleteReviewButton.scss"

const DeleteReviewButton = props => {
  const handleDelete = e => {
    e.preventDefault()
    props.deleteReview()
  }
  return <button className="delete-btn" onClick={handleDelete}>Delete</button>
}

export default DeleteReviewButton