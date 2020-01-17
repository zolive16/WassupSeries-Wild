import React, {
  Component
} from 'react';

import TrackItBtn from './../trackIt/TrackItBtn';
import axios from 'axios';
import '../../style/pages/detailsPage.css';
import CardSerie from '../movieSerie/CardSerie';
import '../../style/movieSerie/listSerie.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

class DetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      listseries: {},
      seasons: '',
      categories: []
    };
  }

  componentDidMount() {
    // ALL SHOWS
    axios.get('https://api.tvmaze.com/shows').then(res =>
      this.setState({
        listseries: res.data
      })
    );

    // RETRIEVE SAISONS
    axios.get(`https://api.tvmaze.com/shows/${this.props.match.params.id}/seasons`).then(res =>
      this.setState({
        seasons: Object.keys(res.data).map(saison => saison.number) // search number => retreive the length array
      })
    );
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
      responsive: [{
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
    const {
      listseries,
      seasons,
      categories
    } = this.state;
    const random = this.getRandomInt(19);
    return (
      /* DETAILS INFOS SERIES */
      <
      div className = "detailsPage-titleInfo" >
      <
      h1 > {
        this.props.match.params.name
      } < /h1> <
      div > {
        Object.keys(listseries).map(
          serie =>
          this.props.match.params.name === listseries[serie].name && ( <
            div className = "detailsPage-block" >
            <
            img src = {
              listseries[serie].image.medium
            }
            alt = {
              listseries[serie].name
            }
            className = "detailsPage-affiche" >
            < /img> <
            div className = "detailsPage-summury-and-button" >
            <
            h1 className = "detailsPage-synopsys-title" > Synopsis < /h1> <
            p className = "detailsPage-summury" > {
              listseries[serie].summary
            } < /p> <
            div className = "detailsPage-responsive-button-and-note" >
            <
            p className = "detailsPage-button" > {
              ' '
            } <
            TrackItBtn id = {
              this.props.match.params.id
            }
            />{' '} <
            /p> <
            div className = "detailsPage-note1" >
            <
            p > {
              listseries[serie].rating.average
            } < /p> <
            /div> <
            /div> <
            /div> <
            div className = "detailsPage-infos" >
            <
            div className = "detailsPage-note" >
            <
            p > {
              listseries[serie].rating.average
            } < /p> <
            /div> <
            div className = "detailsPage-details" >
            <
            p >
            <
            b > Année de sortie: < /b> {listseries[serie].premiered} <
            /p> <
            div className = "detailsPage-genres" >
            <
            b > Genre: & nbsp; < /b>{' '} {
              listseries[serie].genres.map(genre => ( <
                div > {
                  genre
                } < /div>
              ))
            } <
            /div> <
            p >
            <
            b > Nombre de saisons: < /b> {seasons.length}{' '} <
            /p>{' '} {
              /* array.length */ } <
            /div> <
            /div> <
            /div>
          )
        )
      } <
      /div>

      {
        /* RECOMMANDATIONS */ } <
      div className = "desktop" >
      <
      div className = "ListSerie_titleInfo" >
      <
      h2 className = "ListeSerie_title" > Recommandations < /h2> <
      div className = "separator" > < /div> <
      /div> <
      div className = "ListSerie" > {
        Object.keys(listseries).filter(
          serieId =>
          listseries[serieId].genres &&
          this.sortGenre(listseries[serieId].genres[1], categories)
        )
      } {
        Object.keys(listseries)
          .filter(
            serieId =>
            listseries[serieId].genres && listseries[serieId].genres[1] === categories[random]
          )
          .map((serieId, serieAverage) => {
            return serieAverage < 4 && < CardSerie key = {
              serieId
            } {
              ...listseries[serieId]
            }
            />;
          })
      } <
      /div> <
      /div>

      {
        /* partie mobile */ }

      <
      div className = "mobile" >
      <
      div className = "mobile_contain" >
      <
      h2 > Recommandations < /h2> <
      Slider {
        ...settings
      } > {
        Object.keys(listseries).filter(
          serieId =>
          listseries[serieId].genres &&
          this.sortGenre(listseries[serieId].genres[1], categories)
        )
      } {
        Object.keys(listseries)
          .filter(
            serieId =>
            listseries[serieId].genres &&
            listseries[serieId].genres[1] === categories[random]
          )
          .map((serieId, serieAverage) => {
            return (
              serieAverage < 6 && ( <
                div className = "ListSerie-responsive" >
                <
                CardSerie key = {
                  serieId
                } {
                  ...listseries[serieId]
                }
                /> <
                /div>
              )
            );
          })
      } <
      /Slider> <
      /div> <
      /div> <
      /div>
    );
  }
}
export default DetailsPage;