import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex-row'>
        <Link to='/'>&lt;</Link>
        West African Countries Air Quality Indexes.
    </header>
  )
}

export default Header