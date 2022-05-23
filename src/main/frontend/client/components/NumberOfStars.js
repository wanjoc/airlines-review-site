import React from 'react'

const NumberOfStars = ({numberOfStars}) => {

    

  return (
    <div>
        {numberOfStars}
        <i className="fas fa-star"></i>
    </div>
  )
}

export default NumberOfStars