import React, { useEffect, useState } from 'react';
import CountryCard from '../Components/Layouts/CountryCard';
import SearchFilter from '../Components/UI/SearchFilter';

const Country = () => {
  const [isCountries, SetCountries] = useState([]);
  const [search, Setsearch] = useState(''); // Default to an empty string
  const [filter, Setfilter] = useState('all'); // Default to 'all'

  useEffect(() => {
    async function GetCountryData() {
      try {
        const countryData = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags'
        );
        const finalData = await countryData.json();
        SetCountries(finalData);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    }
    GetCountryData();
  }, []); // Empty dependency array ensures this runs only once

  const searchCountry = (country) => {
    // Ensure country.name and country.name.common are defined
    if (!country.name || !country.name.common) return false;
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true; // If no search term, include all countries
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // here is the main logic
  const filterCountries = isCountries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        Setsearch={Setsearch}
        filter={filter}
        Setfilter={Setfilter}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
