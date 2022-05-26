import React from 'react'
import { Link } from 'react-router-dom'

const EditReviewButton = (props) => {

    const getReview = () => {
        props.fetchAirline()
    }
  return (
    <div>
        <Link to={`/airlines/edit/${props.id}`}><button>Edit</button></Link>
    </div>
  )
}

export default EditReviewButton