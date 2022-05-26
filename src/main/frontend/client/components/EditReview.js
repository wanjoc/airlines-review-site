import React, { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"

import ErrorList from "./ErrorList"

const EditReview = props => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [errors, setErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [review, setReview] = useState({
    id: "",
    reviewerName: "",
    numberOfStars: "",
    comment: "",
    airline: {},
    airlineId: ""
  })

  const reviewId = props.match.params.id

  const fetchReview = async () => {
    try {
      const response = await fetch(`/api/v1/reviews/${reviewId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      const targetedReview = responseBody.review;
      targetedReview.airlineId = targetedReview.airline.id
      console.log(targetedReview)
      setReview(targetedReview)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchReview()
  }, [])

  const handleChange = e => {
    setReview({
      ...review,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }
  const isValid = () => {
    let submitErrors = {}

    const requiredFields = ["reviewerName"]
    requiredFields.forEach(field => {
      if (review[field].trim() === "") {
        review[field] = "*****"
      }
    })
    if (review.numberOfStars === null) {
      submitErrors = { ...submitErrors, "Number Of Stars": "Is Blank" }
    } else if (review.numberOfStars <= 0 || review.numberOfStars > 5) {
      submitErrors = {
        ...submitErrors,
        "Number Of Stars": "Rating has to be between 1 and 5"
      }
    }
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const editReview = async () => {
    try {
      const response = await fetch(`/api/v1/reviews/${reviewId}`, {
        method: "PUT",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(review)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const responseBody = await response.json()
        setShouldRedirect(true)
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  if (shouldRedirect) {
    return <Redirect push to={`/airlines/reviews/${review.id}`} />
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (isValid()) {
      editReview()
    }
  }

  const updateNumOfStars = () => {
    setReview({
      ...review,
      numberOfStars: rating
    })
  }

  return (
    <>
      <div className="review-form">
        <div className="appFormContainer grid-x small-8 large-4">
          <div className="appFormContainer grid-y">
            <div className="appForm ">
              <h1>We appreciate your feedback!</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <ErrorList errors={errors} />
              <label htmlFor="reviewerName">
                Your Name:
                <input
                  type="text"
                  name="reviewerName"
                  id="reviewerName"
                  value={review.reviewerName}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="numberOfStars">
                Your Rating :
                {[...Array(5)].map((star, index) => {
                  index += 1
                  return (
                    <output
                      type="button"
                      name="numberOfStars"
                      key={index}
                      className={index <= (hover || rating) ? "on" : "off"}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                      onChange={handleChange}
                    >
                      <span className="star">&#9733;</span>
                    </output>
                  )
                })}
              </label>
              <label htmlFor="comment">
                Comment:
                <textarea
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="10"
                  value={review.comment}
                  onChange={handleChange}
                ></textarea>
              </label>
              <div className="buttons">
                <button type="submit" onClick={updateNumOfStars}>
                  Update my Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditReview
