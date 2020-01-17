import React from 'react';
import '../../style/home/footer.css';
import social_Networks from '../../style/assets/social.png';
import logo from '../../style/assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
            
      <div className="footer_Content">
                <img className="footer_Content_Logo" src={logo} alt="logo wassupserie"></img>
              
      </div>
            <div className="footer_Line"></div>
            
      <ul className="footer_Links">
                <li className="footer_Link">Qui sommes nous ?</li>
                <li className="footer_Link">Mentions légales</li>
                
        <Link to="/Contact">
          <li className="footer_Link">Contact</li>
        </Link>
              
      </ul>
            
      <div className="footer_Socials">
                
        <img className="footer_Social" src={social_Networks} alt="social networks logo"></img>
              
      </div>
          
    </div>
  );
};

export default Footer;
