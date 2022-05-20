import React from "react"
import _ from "lodash"

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
      <div className="callout alert" data-closable>
        <ul>{listItems}</ul>
        <button className="close-button" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  } else {
    return ""
  }
}

export default ErrorList