import React from 'react';
import Borders from './Borders';
import './Country.css';

function Country(props) {
    var country = props.country;

    return (
    <div className="country">
        <img className="flag" src={country.flag} alt="flag" />
        <div className="info">
            <h1>{country.name}</h1>
            <h3>Capital: {country.capital}</h3>
            <p>Region: {country.region} <br />
                Subregion: {country.subregion} <br />
                Population: {country.population} <br />
            </p>
        </div>
        <div className="languages">
            Languages: 
            <ul>
                {country.languages.map((language) => {
                return <li>{language.name}</li>
            })} 
            </ul>
        </div>
        <div className="borders">
            Borders:
            <ul>
                {country.borders.map((border) =>  {
                 return <Borders border={border}/>
            })} 
            </ul>
        </div>
    </div>
    )
}

export default Country;