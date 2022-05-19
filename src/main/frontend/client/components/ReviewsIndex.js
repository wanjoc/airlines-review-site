import React from 'react'

const ReviewsIndex = (props) => {

    const reviews = props.reviews?.map(review=>{
        <aside key={review.id}>
            <p><strong>{review.reviewerName} `(${review.numberOfStars})`</strong></p>
            <p>{comment}</p>
        </aside>
    })
  return (
    <div>{reviews}</div>
  )
}

export default ReviewsIndex