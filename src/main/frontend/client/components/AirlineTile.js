import React from "react"
import { Link } from "react-router-dom"

const AirlineTile = ({ airline: { id, name, logoUrl } }) => {
  return (
  <>
  <div>
  <ol>
    <li>
      <Link to={`/airlines/${id}`}>
        <h3>{name}</h3>
        <img className = "index-logo" src={logoUrl}/>
      </Link>
       </li>
       </ol>
       </div>
    </>
  )
}

export default AirlineTile
