import React from 'react'

const Jsx5 = () => {

    const countries = ["Germany", "Kazakhstan", "Turkey", "France", "China"]

  return (
    <div>
        <ul>
            { countries.map((country, index)=><li key={index}>{country}</li>) }            
        </ul>
    </div>
  )
}

export default Jsx5