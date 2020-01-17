import React, { Component } from 'react';
import CardSerie from './CardSerie';
import '../../style/movieSerie/listSerie.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

/* List Serie */

class ListSerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      seriesPerCategories: []
    };

    this.sortGenre = this.sortGenre.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
  }

  sortGenre = (genre, categories) => {
    if (genre !== undefined) {
      if (!categories.includes(genre)) {
        categories.push(genre);
      }
    }
  };

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  render() {
    var settings = {
      className: 'center',
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const categories = [];
    const random = this.getRandomInt(19);
    return (
      <div>
        <div className="desktop">
          <div className="ListSerie_main">
            <div className="ListSerie_titleInfo">
              <h2 className="ListeSerie_title">Les plus populaires</h2>
              <div className="separator"></div>
            </div>
            <div className="ListSerie">
              {Object.keys(this.props)
                .filter(
                  serieId => this.props[serieId].rating && this.props[serieId].rating.average > 8
                )
                .map(
                  (serieId, serieAverage) =>
                    serieAverage < 4 && <CardSerie key={serieId} {...this.props[serieId]} />
                )}
            </div>

            <div className="ListSerie_titleInfo">
              <h2 className="ListeSerie_title">A voir absolument</h2>
              <div className="separator"></div>
            </div>
            <div className="ListSerie">
              {Object.keys(this.props)
                .filter(serieId => this.props[serieId].id)
                .map(
                  (serieId, serieAverage) =>
                    serieAverage < 4 && (
                      <CardSerie
                        key={serieId}
                        {...this.props[Math.floor(Math.random(serieId) * 100)]}
                      />
                    )
                )}
            </div>

            <div className="ListSerie_titleInfo white">
              <h2 className="ListeSerie_title black">Recommandations</h2>
              <div className="separator"></div>
            </div>
            <div className="ListSerie white">
              {Object.keys(this.props).filter(
                serieId =>
                  this.props[serieId].genres &&
                  this.sortGenre(this.props[serieId].genres[1], categories)
              )}
              {Object.keys(this.props)
                .filter(
                  serieId =>
                    this.props[serieId].genres &&
                    this.props[serieId].genres[1] === categories[random]
                )
                .map((serieId, serieAverage) => {
                  return serieAverage < 4 && <CardSerie key={serieId} {...this.props[serieId]} />;
                })}
            </div>
          </div>
        </div>
        {/* partie mobile */}
        <div className="mobile">
          <div className="mobile_contain">
            <h2> Les plus populaires </h2>
            <Slider {...settings}>
              {Object.keys(this.props)
                .filter(
                  serieId => this.props[serieId].rating && this.props[serieId].rating.average > 8
                )
                .map(
                  (serieId, serieAverage) =>
                    serieAverage < 6 && (
                      <div className="ListSerie-responsive">
                        <CardSerie key={serieId} {...this.props[serieId]} />
                      </div>
                    )
                )}
            </Slider>
          </div>

          <div className="mobile_contain">
            <h2> A voir asolument </h2>
            <Slider {...settings}>
              {Object.keys(this.props)
                .filter(serieId => this.props[serieId].id)
                .map(
                  (serieId, serieAverage) =>
                    serieAverage < 6 && (
                      <div className="ListSerie-responsive">
                        <CardSerie
                          key={serieId}
                          {...this.props[Math.floor(Math.random(serieId) * 100)]}
                        />
                      </div>
                    )
                )}
            </Slider>
          </div>

          <div className="mobile_contain whitebackground">
            <h2 className="mobile-title"> Recommandations </h2>
            <Slider {...settings}>
              {Object.keys(this.props).filter(
                serieId =>
                  this.props[serieId].genres &&
                  this.sortGenre(this.props[serieId].genres[1], categories)
              )}
              {Object.keys(this.props)
                .filter(
                  serieId =>
                    this.props[serieId].genres &&
                    this.props[serieId].genres[1] === categories[random]
                )
                .map((serieId, serieAverage) => {
                  return (
                    serieAverage < 6 && (
                      <div className="ListSerie-responsive">
                        <CardSerie key={serieId} {...this.props[serieId]} />
                      </div>
                    )
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default ListSerie;
