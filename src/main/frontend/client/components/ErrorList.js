import React from "react"
import _ from "lodash"

import "../assets/scss/errorList.scss"

const ErrorList = props => {
  const errantFields = Object.keys(props.errors)
  if (errantFields.length > 0) {
    let index = 0
    const listItems = errantFields.map(field => {
      index++
      return (
        <li key={index}>
          {_.startCase(field)} {props.errors[field]}
        </li>
      )
    })
    return (
      <div className="alert">
        <ul className="error-list"></ul>
        {/* <button className="close-alert" aria-label="Dismiss alert" type="button">
          <span aria-hidden="true">X</span>
        </button> */}
      </div>
    )
  } else {
    return ""
  }
}

export default ErrorList