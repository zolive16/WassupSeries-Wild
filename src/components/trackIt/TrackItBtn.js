import React, { Component } from 'react';
import '../../style/trackIt/trackItBtn.css';
import axios from 'axios';
import check from '../../style/assets/checked.svg';
import '../../style/movieSerie/cardSerie.css';

class TrackItBtn extends Component {
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
    if (index.includes(parseInt(this.props.id)) === false) {
      localStorage.setItem('compteur', this.props.id);
      const url = `http://api.tvmaze.com/shows/${localStorage.getItem(`compteur`)}/episodes`;

      axios.get(url).then(res => {
        this.setState({ donnees: res.data, color: true });
        //calcul du total de minutes de toute la série
        this.state.donnees.map(key => this.setState({ total: this.state.total + key.runtime }));
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
  render() {
    return (
      <div
        className={
          this.state.include.includes(parseInt(this.props.id))
            ? 'trackItButtonCheck'
            : 'trackItButton'
        }
      >
        <button
          className={
            this.state.include.includes(parseInt(this.props.id))
              ? 'trackItButtonCheck'
              : 'trackItButton'
          }
          onClick={() => this.compteurClick(this)}
        >
          {this.state.include.includes(parseInt(this.props.id)) ? (
            <img src={check} alt="" className="check2" />
          ) : (
            'Suivre'
          )}
        </button>
      </div>
    );
  }
}

export default TrackItBtn;
