import React from 'react';

const DetailsPage = ({ details }) => {
  const { components } = details.data;
  const title = details.ctryinfo.ctryname;

  const items = Object.keys(components).map((key) => (
    <li key={key}>
      {key}
      :
      {' '}
      {components[key]}
    </li>
  ));

  return (
    <main className='details'>
      <p className='countryname'>{title}'s Air Index</p>
      <ul>{items.map((item) => (item))}</ul>
    </main>
  );
};

export default DetailsPage;
