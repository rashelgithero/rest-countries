import React from 'react';
import './SetCountries.css'
import { Link } from 'react-router-dom';

const SetCountries = (props) => {
    const { name, area } = props.country
    return (
        <div className='area'>
            <h3><span className ='title'>Official Name:</span> {name.official}</h3>
            <h3><span className ='title'>Common Name:</span> {name.common}</h3>
            <h3><span className ='title'>Area:</span> {area}</h3>
            <div className='show'>
                <Link className='link' to={`/country/name/${name.official}`}><button onClick={props.clickButton}>Details</button></Link>
                
            </div>
        </div>
    );
};

export default SetCountries;