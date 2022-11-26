import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({countriesdata}) => {

  const aqiStatus = (aqi) => {
    if(aqi === 1){
      return "Good";
    }
    else if(aqi === 2){
      return "Moderate";
    }
    else if(aqi === 3){
      return "Unhealthy";
    }
    else if(aqi === 4){
      return "Very Unhealthy";
    }
    else{
      return "Hazardous";
    }
  }
  

  return (
    <div>{countriesdata.map((countrydata) => {
      return(<Link to={countrydata.ctryinfo.ctryname} key={countrydata.id}><div>{countrydata.ctryinfo.ctryname}</div>
      <div>
      <span>Air status: {countrydata.data.main.aqi}</span> <div>{aqiStatus(countrydata.data.main.aqi)}</div>
      </div>
      </Link>)
  })}</div>
  )
}

export default HomePage;