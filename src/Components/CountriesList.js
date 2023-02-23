import React from 'react';
import Country from './Country';

const CountryList = ({regions}) => {

    const regionItems = regions.map((region, index) => {
      return <Country region={region} key={index}  />
    })

  return (
    <div>
    <ul>
      {regionItems}
    </ul>
  </div>
  )
}

export default CountryList;