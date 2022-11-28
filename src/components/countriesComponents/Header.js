import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex-row">
    <Link title="Home" className="header__home" to="/">&lt;</Link>
    <form className="flex-row">
      <span className="material-symbols-outlined">
        search
      </span>
      <input name="name" type="text" placeholder="country" />
    </form>
    <h4>West African Countries Air Quality Indexes.</h4>
  </header>
);

export default Header;
