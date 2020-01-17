import React, {
  Component
} from 'react';
import Header from './components/home/Header';
import {
  Switch,
  Route
} from 'react-router-dom';
import {
  CircleArrow as ScrollUpButton
} from 'react-scroll-up-button';
import Footer from './components/home/Footer';
import axios from 'axios';
import FormPage from './components/pages/FormPage';
import HomePage from './components/pages/HomePage';
import Traking from './components/tracker/Traking';
import DetailsPage from './components/pages/DetailsPage';
import Series from './components/pages/Series';

localStorage.getItem('duration2') === null && localStorage.setItem('duration2', 0);
localStorage.getItem('index') === null && localStorage.setItem('index', '0');
class App extends Component {
  constructor() {
    super();
    this.state = {
      serie: {
        image: {},
        rating: {},
        compteur: '',
        donnees2: ''
      }
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

  render() {
      const {
        serie,
        compteur
      } = this.state;
      return ( <
          div className = "App" >
          <
          Header / >
          <
          Switch >
          <
          Route exact path = "/"
          render = {
            routeProps => < HomePage {
              ...routeProps
            }
            data = {
              serie
            }
            />} / >
            <
            Route path = "/Series"
            render = {
              routeProps => < Series {
                ...routeProps
              }
              data = {
                serie
              }
              />} / >
              <
              Route
              path = "/MyTracker"
              render = {
                routeProps => < Traking {
                  ...routeProps
                } {
                  ...serie
                }
                counter = {
                  compteur
                }
                />} /
                >
                <
                Route path = "/Contact"
                component = {
                  FormPage
                }
                /> <
                Route path = "/:name/:id"
                component = {
                  DetailsPage
                }
                /> <
                /Switch> <
                Footer / >
                <
                ScrollUpButton / >
                <
                /div>
              );
            }
          }

          export default App;