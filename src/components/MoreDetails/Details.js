/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      nativeName, population, region, subRegion, capital, name,
    } = this.props;
    return (
      <ul className="LeftList">
        <h1>{name}</h1>
        <li>
          Native Name:
          {' '}
          {nativeName}
        </li>
        <li>
          Population:
          {' '}
          {population}
        </li>
        <li>
          region:
          {' '}
          {region}
        </li>
        <li>
          Sub Region:
          {' '}
          {subRegion}
        </li>
        <li>
          Capital:
          {' '}
          {capital}
        </li>
      </ul>
    );
  }
}

export default Details;
