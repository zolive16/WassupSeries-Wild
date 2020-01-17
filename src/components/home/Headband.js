import React from 'react';
import TrackItBtn from './../trackIt/TrackItBtn';
import gotPicture from '../../style/assets/gotPicture.jpg';
// import DetailsPage from '../../components/pages/DetailsPage';
import '../../style/home/headband.css';

const Headband = () => {
  return (
    <div className="bandeau">
      <div className="bandeau_Content">
        <img
          className="bandeau_Content_image"
          src={gotPicture}
          alt="affiche de la nouvelle série"
        ></img>
        <div className="bandeau_Content_Global">
          <div className="bandeau_Content_Title">
            <h1 className="bandeau_Content_Title_h1">Game of Thrones</h1>
          </div>
          <div className="bandeau_Content_Subtitle">
            <h2>Fantasy - 2019 - Saison 8 - Episode 8</h2>
          </div>
          <div className="bandeau_Content_Subtitle_Incoming">
            <p>A venir : 23 décembre 2019</p>
          </div>
        </div>
      </div>
      <div className="bandeau_Button">
        <TrackItBtn />
        <button className="bandeau_DetailButton">Fiche détaillée</button>
      </div>
    </div>
  );
};

export default Headband;
