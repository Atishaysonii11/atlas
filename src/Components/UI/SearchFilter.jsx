import React from 'react'

const SearchFilter = ({search,Setsearch,filter,Setfilter}) => {

    const HandleInputChange=(event)=>{
        Setsearch(event.target.value)
    }

    const handleSelectChange=(event)=>{
        Setfilter(event.target.value);
    }
  return (
    <section className='section-searchFilter container'>
         <div className='search-input'>
         <input type='text' placeholder='search' value={search} onChange={HandleInputChange}/>
         </div>
        <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default SearchFilter
