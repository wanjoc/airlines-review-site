import React from "react"

const AirlineTile = props => {
  const { name } = props.airline
  return <h2>{name}</h2>
}

export default AirlineTile
