import React, { useState } from "react"
import { Redirect } from "react-router"
import { Link } from "react-router-dom"
import _ from "lodash"

import ErrorList from "./ErrorList"

const NewAirlineForm = () => {
  const [formPayload, setFormPayload] = useState({
    name: "",
    description: "",
    logoUrl: "",
    headquarters: "",
    contactNumber: "",
    homepageUrl: ""
  })
  const [errors, setErrors] = useState({})
  const [id, setId] = useState(null)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const addAirline = async () => {
    try {
      const response = await fetch(`/api/v1/airlines`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(formPayload)
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

      const body = await response.json()
      setId(body.airline.id)
      setShouldRedirect(true)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = Object.keys(formPayload)
    requiredFields.forEach(field => {
      if (field !== "logoUrl" && formPayload[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
      setErrors(submitErrors)
      return _.isEmpty(submitErrors)
    })
    return true
}

  const handleSubmit = event => {
    event.preventDefault()
    if(validForSubmission()) {
        addAirline()
    }
  }

  const handleInputChange = event => {
    setFormPayload({
      ...formPayload,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  
  if (shouldRedirect) {
    return <Redirect push to={`/airlines/${id}`} />
  }

  return (
    <div>
      <h1>Add A New Airline</h1>
      <Link to={"/airlines"}>Back to airlines</Link>
      <form className="airline-form" onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
        <div>
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            id="name"
            type="text"
            value={formPayload.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            name="description"
            id="description"
            type="text"
            value={formPayload.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="logoUrl">Logo Url: </label>
          <input
            name="logoUrl"
            id="logoUrl"
            type="text"
            value={formPayload.logoUrl}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="headquarters">Headquarters: </label>
          <input
            name="headquarters"
            id="headquarters"
            type="text"
            value={formPayload.headquarters}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number: </label>
          <input
            name="contactNumber"
            id="contactNumber"
            type="text"
            value={formPayload.contactNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="homepageUrl">Homepage Url: </label>
          <input
            name="homepageUrl"
            id="homepageUrl"
            type="text"
            value={formPayload.homepageUrl}
            onChange={handleInputChange}
          />
        </div>
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewAirlineForm
