import React, { Component } from 'react';
import './../style/home/menuBurger.css';
import { Link } from 'react-router-dom';

class MenuBurger extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  handleChange = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  render() {
    const { checked } = this.state;
    return (
      <div>
        <nav className="All">
          <div className="menuToggle">
            <input type="checkbox" onClick={() => this.handleChange()} checked={checked} />

            <span></span>
            <span></span>
            <span></span>

            <ul className="menu">
              <Link to="/" onClick={() => this.handleChange()} checked={checked}>
                <li>Accueil</li>
              </Link>
              <Link to="/Series" onClick={() => this.handleChange()} checked={checked}>
                <li>Séries</li>
              </Link>
              <Link to="/MyTracker" onClick={() => this.handleChange()} checked={checked}>
                <li>My Tracker</li>
              </Link>
              <Link to="/Profile" onClick={() => this.handleChange()} checked={checked}>
                <li>Mon profil</li>
              </Link>
              <Link to="Contact" onClick={() => this.handleChange()} checked={checked}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MenuBurger;
