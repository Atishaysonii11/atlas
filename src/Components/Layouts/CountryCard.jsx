import React from 'react'
import {NavLink} from 'react-router-dom';

const CountryCard = ({country}) => {

  const {flags,name,population,region,capital}=country;
  return (
    <li className='country-card card'>
      <div className='container-card bg-white-box'>
        <img src={flags.svg} alt={flags.alt}/>

        <div className='countryInfo'>
          <p className='card-title'>{country.name.common}</p>
          <p className='card-description'>population:{population}</p>
          <p className='card-description'>Region:{region}</p>
          <p className='card-description'>Capital:{capital[0]}</p>
        </div>

        <NavLink to={`/country/${name.common}`}><button>Read more </button></NavLink>
      </div>
    </li>
  )
}

export default CountryCard
