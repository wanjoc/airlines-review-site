import React from 'react'
import { Link } from 'react-router-dom'

import "../assets/scss/styling/EditReviewButton.scss"

const EditReviewButton = (props) => {

    const getReview = () => {
        props.fetchAirline()
    }
  return (
    <div>
        <Link to={`/airlines/edit/${props.id}`}><button className='edit-btn'>Edit</button></Link>
    </div>
  )
}

export default EditReviewButton