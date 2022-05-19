import React, { useState } from 'react'
import _ from "lodash"

import ErrorList from "./ErrorList"


const ReviewForm = (props) => {
const [newReview, setNewReview] = useState({
    reviewerName: "",
    numberOfStars: null,
    comment: ""
})
const [errors, setErrors] = useState({})

const handleChange = (e) => {
	setNewReview({
		...newReview,
		[e.currentTarget.name]: e.currentTarget.value
	})
}

const isValid = () => {
	let submitErrors = {}
	if(newReview.numberOfStars === null) {
		submitErrors = {...submitErrors, "Number Of Stars": "Is Blank"}
	} else if (newReview.numberOfStars <= 0 || newReview.numberOfStars > 5) {
		submitErrors = {...submitErrors, "Number Of Stars": "Rating has to be between 1 and 5"}
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
	props.success(true)
} catch (error) {
	console.error(`Error in fetch: ${error.message}`)
}

}

const handleSubmit = event => {
	event.preventDefault()
	if(isValid()) {
			addNewReview()
	}
} 

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <ErrorList errors={errors} />
      <label htmlFor="reviewerName">
        Reviewer Name:
        <input type="text" name="reviewerName" id="reviewerName" value={newReview.reviewerName} onChange={handleChange} />
      </label>
      <label htmlFor="numberOfStars">
        Number of Stars:
        <input required type="number" step="1" name="numberOfStars" id="numberOfStars" value={newReview.numberOfStars} onChange={handleChange} />
      </label>
      <label htmlFor="comment">
        Comment:
        <textarea name="comment" id="comment" cols="30" rows="10" value={newReview.comment} onChange={handleChange}></textarea>
      </label>

      <input type="submit" value="Add Review" />
      </form>
    </div>
  )
}

export default ReviewForm