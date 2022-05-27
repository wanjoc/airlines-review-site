import React, { useState } from "react"
import PopUp from "./PopUp"

import "../assets/scss/styling/DeleteReviewButton.scss"

const DeleteAirlineButton = props => {
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const handleDelete = e => {
    e.preventDefault()
    props.deleteAirline()
  }
  return (
    <>
      <button className="delete-btn" onClick={togglePopup}>
        Delete
      </button>
      {isOpen && <PopUp handleClose={togglePopup} handleDelete={handleDelete} />}
    </>
  )
}

export default DeleteAirlineButton
