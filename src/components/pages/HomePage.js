import React, { Component } from 'react';

import ListSerie from '../movieSerie/ListSerie';
import Headband from '../home/Headband';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Headband />
        <ListSerie {...this.props.data} />
      </div>
    );
  }
}

export default HomePage;
