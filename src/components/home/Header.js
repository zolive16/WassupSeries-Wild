import React from 'react';
import logo from '../../style/assets/logo-white.svg';
import '../../style/home/header.css';
import daeneris from '../../style/assets/daeneris.webp';
import wassupseries from '../../style/assets/wassupseries.png';
import { Link } from 'react-router-dom';
import AutocompleteBar from './AutocompleteBar';
import MenuBurger from './../MenuBurger';
import '../../style/pages/formPage.css';

function Header() {
  localStorage.setItem('duration', 0);
  return (
    <div className="home_header">
      <div className="home_header_navbar_logo">
        <Link to="/">
          <img src={logo} alt="wassupseries logo"></img>
        </Link>
      </div>
      <div className="home_header_navbar_list">
        <ul className="home_header_navbar_onglets">
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <Link to="/Series">
            <li>Séries</li>
          </Link>
        </ul>
      </div>
      <div className="home_header_navbar_mobile_title">
        <img className="home_header_navbar_mobile_logo" src={wassupseries} alt="wassupseries"></img>
      </div>
      <div className="home_header_navbar_search">
        <AutocompleteBar className="input-search" />
      </div>

      <div className="home_header_navbar_profile_button">
        <Link to="/MyTracker">
          <button className="home_header_navbar_tractIt_button">My Tracker</button>
        </Link>
      </div>
      <div className="home_header_navbar_profile">
        <p>Daenerys</p>
        <img className="home_header_navbar_profile_photo" src={daeneris} alt="profile"></img>
      </div>
      <MenuBurger />
    </div>
  );
}

export default Header;
