import React, { Component } from 'react';
import CardSerie from '../movieSerie/CardSerie';
import '../../style/pages/series.css';

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  render() {
    const maxSeriesApi = 239;
    return (
      <div className="container">
        <div className="ListSerie_titleInfo">
          <h2 className="ListeSerie_title"> Liste des séries</h2>
          <div className="separator"></div>
        </div>
        <div className="ListSerie">
          {Object.keys(this.props.data)
            .filter(
              serieId =>
                this.props.data[serieId].rating && this.props.data[serieId].rating.average > 0
            )
            .map(
              (serieId, serieAverage) =>
                serieAverage < maxSeriesApi && (
                  <CardSerie key={serieId} {...this.props.data[serieId]} />
                )
            )}
        </div>
      </div>
    );
  }
}

export default Series;
