import React, {
  Component
} from 'react';
import stranger from '../../style/assets/stranger.png';
import handmaidstale from '../../style/assets/handmaidstale.jpg';
import got from '../../style/assets/got.jpg';
import mirror from '../../style/assets/mirror.jpg';
import button from '../../style/assets/button.svg';
import '../../style/tracker/traking.css';
import axios from 'axios';

class Traking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donnees: '',
      total: 0,
      index: 0,
      serie: '',
      index2: localStorage
        .getItem('index')
        .split(',')
        .map(key => parseInt(key))
    };
  }

  componentDidMount() {
    axios
      .get('https://api.tvmaze.com/shows')
      .then(response => response.data)
      .then(data => {
        this.setState({
          serie: data
        });
      });
  }

  badges_title = () => {
    const duree1 = 50 - Math.round(localStorage.getItem('duration2') / 60);
    const duree2 = 200 - Math.round(localStorage.getItem('duration2') / 60);
    const duree3 = 3000 - Math.round(localStorage.getItem('duration2') / 60);

    if (Math.round(localStorage.getItem('duration2') / 60) < 50) {
      return ( <
        div className = "badge_hour" >
        <
        p >
        Prochain badge dans < span > {
          duree1
        }
        heures < /span> <
        /p> <
        /div>
      );
    } else if (
      Math.round(localStorage.getItem('duration2') / 60) >= 50 &&
      Math.round(localStorage.getItem('duration2') / 60) < 200
    ) {
      return ( <
        div className = "badge_hour" >
        <
        p >
        Prochain badge dans < span > {
          duree2
        }
        heures. < /span> <
        /p> <
        /div>
      );
    } else if (
      Math.round(localStorage.getItem('duration2') / 60) >= 200 &&
      Math.round(localStorage.getItem('duration2') / 60) < 3000
    ) {
      return ( <
        div className = "badge_hour" >
        <
        p >
        Pochain badge dans < span > {
          duree3
        }
        heures. < /span> <
        /p> <
        /div>
      );
    }
  };

  badges1 = () => {
    if (Math.round(localStorage.getItem('duration2') / 60) < 50) {
      return ( <
        div >
        <
        img src = {
          stranger
        }
        alt = "affiche du badge" > < /img> <
        /div>
      );
    } else if (
      Math.round(localStorage.getItem('duration2') / 60) >= 50 &&
      Math.round(localStorage.getItem('duration2') / 60) < 200
    ) {
      return ( <
        div >
        <
        img src = {
          handmaidstale
        }
        alt = "affiche du badge" > < /img> <
        /div>
      );
    } else if (
      Math.round(localStorage.getItem('duration2') / 60) >= 200 &&
      Math.round(localStorage.getItem('duration2') / 60) < 3000
    ) {
      return ( <
        div >
        <
        img src = {
          mirror
        }
        alt = "affiche du badge" > < /img> <
        /div>
      );
    } else {
      return <p > Va prendre l 'air putain !!!!!!!!!!!</p>;
    }
  };

  badges2 = () => {
    if (Math.round(localStorage.getItem('duration2') / 60) < 50) {
      return ( <
        div >
        <
        img src = {
          handmaidstale
        }
        alt = "affiche du badge" > < /img> <
        /div>
      );
    } else if (
      Math.round(localStorage.getItem('duration2') / 60) >= 50 &&
      Math.round(localStorage.getItem('duration2') / 60) < 200
    ) {
      return ( <
        div >
        <
        img src = {
          mirror
        }
        alt = "affiche du badge" > < /img> <
        /div>
      );
    } else if (
      Math.round(localStorage.getItem('duration2') / 60) >= 200 &&
      Math.round(localStorage.getItem('duration2') / 60) < 3000
    ) {
      return ( <
        div >
        <
        img src = {
          got
        }
        alt = "affiche du badge" > < /img> <
        /div>
      );
    } else {
      return <p > Toujours en vie ? < /p>;
    }
  };

  render() {
    const {
      serie,
      index2
    } = this.state;
    return ( <
      div className = "Traking_container" >
      <
      h1 className = "Traking_title" > compteur de série < /h1> <
      div className = "Traking_block" >
      <
      div className = "Traking_first_badge" > {
        this.badges1()
      } <
      h2 > Bravo, tu as obtenu un nouveau badge < /h2> <
      p >
      Tu as visionné:
      <
      span > {
        Math.round(localStorage.getItem('duration2') / 60)
      }
      heures < /span> <
      /p> <
      /div>

      <
      div id = "arrowAnim" >
      <
      div className = "arrowSliding" >
      <
      div className = "arrow" > < /div> <
      /div> <
      div className = "arrowSliding delay1" >
      <
      div className = "arrow" > < /div> <
      /div>

      <
      div className = "arrowSliding delay2" >
      <
      div className = "arrow" > < /div> <
      /div>

      <
      div className = "arrowSliding delay3" >
      <
      div className = "arrow" > < /div> <
      /div> <
      /div>

      <
      div className = "rond_central" >
      <
      img src = {
        button
      }
      alt = "button" > < /img> <
      /div>

      <
      div className = "Traking_second_badge" > {
        this.badges2()
      } {
        this.badges_title()
      } <
      /div> <
      /div> <
      div className = "contain" >
      <
      div className = "series_suivies" >
      <
      p className = "paragraph" > Vos series suivies: < /p> <
      div className = "tracked" > {
        Object.keys(serie).map(
          key =>
          index2.includes(serie[key].id) && ( <
            div className = "series_unit" >
            <
            img src = {
              serie[key].image.medium
            }
            alt = "" > < /img> <
            p > {
              serie[key].name
            } < /p> <
            /div>
          )
        )
      } <
      /div> <
      /div> <
      /div> <
      /div>
    );
  }
}

export default Traking;