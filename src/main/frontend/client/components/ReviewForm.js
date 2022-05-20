import React, { useState } from "react"
import _ from "lodash"
import "../assets/scss/foundation/reviewFormStyle.scss"

import ErrorList from "./ErrorList"

const ReviewForm = props => {
  const [newReview, setNewReview] = useState({
    reviewerName: "",
    numberOfStars: "",
    comment: ""
  })
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    setNewReview({
      ...newReview,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const isValid = () => {
    let submitErrors = {}
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

  return (
    <>
      <div className="review-form">
        <div className="appFormContainer">
          <div className="appFormContainer grid-x">
            <h1 className="appForm">We appriacite your feedback</h1>
            <form onSubmit={handleSubmit}>
              <ErrorList errors={errors} />
              <div class="grid-x grid-padding-x">
                <div class="cell">
                  <label htmlFor="reviewerName">
                    Reviewer Name:
                    <input
                      type="text"
                      name="reviewerName"
                      id="reviewerName"
                      value={newReview.reviewerName}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
              <div class="cell">
                <label htmlFor="numberOfStars">
                  Number of Stars:
                  <input
                    required
                    type="number"
                    step="1"
                    min="1"
                    max="5"
                    name="numberOfStars"
                    id="numberOfStars"
                    value={newReview.numberOfStars}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div class="cell">
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
              </div>
              <label for="exampleFileUpload" class="button">Upload File</label>
<input type="file" id="exampleFileUpload" class="show-for-sr"></input>
              <div className="button-group align-justify">
                <input type="submit" value="Add Review" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewForm
