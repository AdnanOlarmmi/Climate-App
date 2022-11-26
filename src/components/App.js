import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { countriesInfo } from '../redux/country/countrySlice';
import HomePage from './countriesComponents/HomePage';
import {
    BrowserRouter as Router,
    Routes, Route,
  
  } from 'react-router-dom';
import DetailsPage from './countriesComponents/DetailsPage';

const App = () => {

const countriesdata = useSelector((state) => state.countrydata);

const dispatch = useDispatch();
useEffect(()=> {
    dispatch(countriesInfo());   
}, []);

  return (
    <Router>
        
        <Routes>
            <Route path="/" element={<HomePage countriesdata={countriesdata} />} />
            {countriesdata.map((countrydata) => {
                return(<Route key={countrydata.id} path={countrydata.ctryinfo.ctryname} element={<DetailsPage details={countrydata}/>}/>)
            })}
        </Routes>
    </Router>
  )
}

export default App