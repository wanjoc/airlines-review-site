import React from "react"

const DeleteReviewButton = props => {
  const handleDelete = e => {
    e.preventDefault()
    props.deleteReview()
  }
  return <button onClick={handleDelete}>Delete this review</button>
}

export default DeleteReviewButton
