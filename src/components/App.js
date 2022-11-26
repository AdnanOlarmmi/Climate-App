import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes, Route,

} from 'react-router-dom';
import { countriesInfo } from '../redux/country/countrySlice';
import HomePage from './countriesComponents/HomePage';
import DetailsPage from './countriesComponents/DetailsPage';
import Header from './countriesComponents/Header';

const App = () => {
  const countriesdata = useSelector((state) => state.countrydata);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(countriesInfo());
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage countriesdata={countriesdata} />} />
        {countriesdata.map((countrydata) => (
          <Route
            key={countrydata.id}
            path={countrydata.ctryinfo.ctryname}
            element={<DetailsPage details={countrydata} />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
