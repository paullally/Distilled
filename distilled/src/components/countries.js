import React from 'react';

const Countries = ({countryData}) => {
    return (
        <div>
            {countryData.map((country, index) => (
                <div key={index} >
                    <h1>{country.name.common}</h1>
                </div>
            ))}
        </div>
    )
};

export default Countries