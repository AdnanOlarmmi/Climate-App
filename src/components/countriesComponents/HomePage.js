import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ countriesdata }) => {
  const aqiStatus = (aqi) => {
    if (aqi === 1) {
      return 'Good';
    }
    if (aqi === 2) {
      return 'Moderate';
    }
    if (aqi === 3) {
      return 'Unhealthy';
    }
    if (aqi === 4) {
      return 'Very Unhealthy';
    }

    return 'Hazardous';
  };

  return (
    <main className='homepage flex-row'>
      {countriesdata&&countriesdata.map((countrydata) => (
        <Link className='homepage__item' to={countrydata.ctryinfo.ctryname} key={countrydata.id}>
          <div className='countryname'>{countrydata.ctryinfo.ctryname}</div>
          <div>
            <span>
              Air status:&nbsp;
              {countrydata.data.main.aqi}
            </span>
            {' '}
            <div>{aqiStatus(countrydata.data.main.aqi)}</div>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default HomePage;
