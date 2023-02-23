import React, { useState, useEffect } from 'react';
import Country from '../Components/Country';
import CountryList from '../Components/CountriesList';
import Titlebar from '../Components/TitleHeader';

const CountriesContainer = ({regions}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      getRegions(regions[0].url);
    }, [regions])

    const getRegions = url =>{
        fetch(url)
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }


    const handleSelectChange = event =>{
        getRegions(event.target.value)
    }
    
    return (
        <div className="main-container">
            <>
            <Titlebar handleSelectChange={handleSelectChange} regions={regions}/>
            </>
            {regions ? <CountryList
             regions={regions}
             handleSelectChange={handleSelectChange}
              /> : null}
        </div>
    )
}

export default CountriesContainer