import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountriesDetail.css'
const CountriesDetails = () => {
    const {countryName} = useParams()
    console.log(typeof countryName)
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[])
    console.log(detail)
    
    return (
        <div>
            {
            detail.map(detail =>(
                <div className='detail' key = {detail.name.official}>
                <h1>{detail.name.official}</h1>
                <p>{detail.capital}</p>
                <p>{detail.population}</p>
                <p>{detail.area}</p>
                <p>{detail.region}</p>
                <p>{detail.subregion}</p>
                <p>{detail.flags.alt}</p>
                <img src={detail.flags.svg} alt="" />
                <a href={detail.maps.openStreetMaps}>{detail.maps.openStreetMaps}</a>
                </div>
            ))
            }
            
            
        </div>
    );
};

export default CountriesDetails;