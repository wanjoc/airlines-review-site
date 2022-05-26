import React from "react"

import "./scss/DeleteReviewButton.scss"

const DeleteAirlineButton = props => {
  const handleDelete = e => {
    e.preventDefault()
    props.deleteAirline()
  }
  return <button className="delete-btn" onClick={handleDelete}>Delete</button>
}

export default DeleteAirlineButton