import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

const CountryDetails = () => {
  const params = useParams();
  console.log(params);

  const [IsIndDetails, SetIndDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function GetIndData(countryName) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}?fields=name,population,region,capital,flags,subregion,tld,currencies,languages`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        SetIndDetails(data[0]); // Get the first matching country
      } catch (err) {
        console.error("Error fetching country data:", err);
        setError(err.message);
      }
    }

    if (params.id) {
      GetIndData(params.id);
    }
  }, [params.id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!IsIndDetails) {
    return <p>Loading...</p>; // Show a loading state until data is fetched
  }

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {IsIndDetails && (
          <div className="country-image grid grid-two-cols">
            <img
              src={IsIndDetails.flags.svg}
              alt={IsIndDetails.flags.alt || "Country flag"}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title"> {IsIndDetails.name.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(IsIndDetails.name.nativeName)
                    .map((key) => IsIndDetails.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {IsIndDetails.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {IsIndDetails.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {IsIndDetails.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {IsIndDetails.capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {IsIndDetails.tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(IsIndDetails.currencies)
                    .map((curElem) => IsIndDetails.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(IsIndDetails.languages)
                    .map((key) => IsIndDetails.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
