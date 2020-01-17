import React, { Component } from 'react';
import '../../style/movieSerie/cardSerie.css';
import BtnInfo from '../../style/assets/button-infos.svg';
import { Link } from 'react-router-dom';

class ButtonInfosDetailsSeries extends Component {
  up = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="contain_infos">
        <div className="CardSerie_MoreInfos_Div" onClick={() => this.up()}>
          <Link to={`/${this.props.infos}/${this.props.id}`}>
            <p>Infos</p>
            <img className="CardSerie_MoreInfos_Button" src={BtnInfo} alt="button" />
          </Link>
        </div>
      </div>
    );
  }
}

export default ButtonInfosDetailsSeries;
