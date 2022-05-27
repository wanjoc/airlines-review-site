import React, { useState } from "react"
import _ from "lodash"

import ErrorList from "./ErrorList"

import "../assets/scss/styling/ReviewForm.scss"

const ReviewForm = props => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [errors, setErrors] = useState({})
  const [newReview, setNewReview] = useState({
    reviewerName: "",
    numberOfStars: "",
    comment: ""
  })

  const handleChange = e => {
    setNewReview({
      ...newReview,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  const isValid = () => {
    let submitErrors = {}

    const requiredFields = ["reviewerName"]
    requiredFields.forEach(field => {
      if (newReview[field].trim() === "") {
        newReview[field] = "*****"
      }
    })
    if (newReview.numberOfStars === null) {
      submitErrors = { ...submitErrors, "Number Of Stars": "Is Blank" }
    } else if (newReview.numberOfStars <= 0 || newReview.numberOfStars > 5) {
      submitErrors = {
        ...submitErrors,
        "Number Of Stars": "Rating has to be between 1 and 5"
      }
    }
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const addNewReview = async () => {
    newReview.airlineId = props.airlineId
    try {
      const response = await fetch(`/api/v1/reviews`, {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newReview)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          return setErrors(body.errors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      }
      const responseBody = await response.json()
      props.keepReviewFormOpen(false)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (isValid()) {
      addNewReview()
    }
  }

  const updateNumOfStars = () => {
    setNewReview({
      ...newReview,
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
                  value={newReview.reviewerName}
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
                  value={newReview.comment}
                  onChange={handleChange}
                ></textarea>
              </label>
              <div className="buttons">
                <button type="submit" onClick={updateNumOfStars}>
                  Post my Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewForm
