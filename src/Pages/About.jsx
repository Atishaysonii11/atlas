import React from 'react'
import Country from "../api/Country.json"

const About = () => {
  return (
    <>
      <section className='section-about container'>
        <h2 className='container-title'>
          Here are the Interesting Facts
          <br></br>
          we're proud of 
        </h2>

        <div className='gradient-cards'>

        {
          Country.map((item,index)=>{
            return <div className='card' key={item.id}>
            <div className='container-card bg-blue-box'>
              <p className='card-title'>{item.country}</p>
              <p>
                <span className='card-description'>Capital:</span>
                {item.capital}
              </p>
              <p>
                <span className='card-description'>{" "}Population:</span>
                {item.population}
              </p>
              <p>
                <span className='card-description'>Interesting Facts:</span>
                {item.interestingFact}
              </p>
            </div>
          </div>
          })
        }
          
        </div>

      </section>
    </>
  )
}

export default About
