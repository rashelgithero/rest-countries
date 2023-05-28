import React, { useEffect, useState } from 'react';
import SetCountries from '../SetCountries/SetCountries';

const Country = () => {
    const [country, setCountry] =useState([])
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    
    return (
        <div>
            {
                country.map(country => (
                    <div key={country.name.official}>
                        <SetCountries  country={country}></SetCountries>
                    </div>
            ))
            }
        </div>
    );
};

export default Country;