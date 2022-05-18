import React from "react"
import { Link } from "react-router-dom"

const AirlineTile = ({airplane: {id, name}})=> {
  return (
  <>
  <Link to={`/airlines/${id}`}><h2>{name}</h2></Link>
  </>
  )
}

export default AirlineTile
