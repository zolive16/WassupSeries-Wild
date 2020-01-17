import React, {
  Component
} from 'react';
import '../../style/movieSerie/cardSerie.css';
import starNotation from '../../style/assets/starNotation.svg';
import axios from 'axios';
import ButtonInfosDetailsSeries from './ButtonInfosDetailsSeries';
import check from '../../style/assets/checked.svg';

class CardSerie extends Component {
  constructor() {
    super();
    this.state = {
      donnees: '',
      total: 0,
      include: localStorage
        .getItem('index')
        .split(',')
        .map(key => parseInt(key))
    };
  }

  compteurClick = btn => {
    //recuperation de la donnée localStorage puis transformation des index en number (considéré comme string de base)
    let index = localStorage
      .getItem('index')
      .split(',')
      .map(key => parseInt(key));

    //si l'id de la serie n'es pas contenu dans un index de la variable "index2" on execute le reste de la fonction
    if (index.includes(this.props.id) === false) {
      localStorage.setItem('compteur', this.props.id);
      const url = `https://api.tvmaze.com/shows/${localStorage.getItem(`compteur`)}/episodes`;

      axios.get(url).then(res => {
        this.setState({
          donnees: res.data,
          color: true
        });
        //calcul du total de minutes de toute la série
        this.state.donnees.map(key => this.setState({
          total: this.state.total + key.runtime
        }));
        //storage duration2 prends la valeur de lui-meme + "total"
        localStorage.setItem(
          'duration2',
          parseInt(localStorage.getItem('duration2')) + this.state.total
        );
        //on recupere le storage "index" dans une variable, on y push l'id de la série et on redeclare le storage avec les valeurs a jour
        let index = [localStorage.getItem('index')];
        index.push(this.props.id);
        localStorage.setItem('index', index);
        this.setState({
          include: localStorage
            .getItem('index')
            .split(',')
            .map(key => parseInt(key))
        });
      });
    }
  };

  scroll = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return ( <
      div className = "CardSerie recomendations_details" >
      <
      img src = {
        this.props.image && this.props.image.medium
      }
      alt = {
        this.props.name
      }
      /> <
      div className = "CardSerie_InfoCard" >
      <
      h5 > {
        this.props.name
      } < /h5> <
      div className = "CardSerie_InfoCard_Div" >
      <
      img className = "CardSerie_InfoCard_Star"
      src = {
        starNotation
      }
      alt = "etoile" / >
      <
      p > {
        this.props.rating && this.props.rating.average
      } < /p> <
      /div> <
      /div> <
      div className = "CardSerie_MoreInfos" >
      <
      button className = {
        this.state.include.includes(this.props.id) ?
        'CardSerie_TrackItButtonChange' :
          'CardSerie_TrackItButton'
      }
      onClick = {
        () => this.compteurClick(this)
      } >
      {
        this.state.include.includes(this.props.id) ? ( <
          img src = {
            check
          }
          alt = ""
          className = "check" / >
        ) : (
          'Suivre'
        )
      } <
      /button>

      <
      ButtonInfosDetailsSeries infos = {
        this.props.name
      }
      id = {
        this.props.id
      }
      /> <
      /div> <
      /div>
    );
  }
}

export default CardSerie;