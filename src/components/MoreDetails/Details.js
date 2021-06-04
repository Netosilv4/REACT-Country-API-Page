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
          <span>Native Name:</span>
          {' '}
          {nativeName}
        </li>
        <li>
          <span>Population:</span>
          {' '}
          {population}
        </li>
        <li>
          <span>region:</span>
          {' '}
          {region}
        </li>
        <li>
          <span>Sub Region:</span>
          {' '}
          {subRegion}
        </li>
        <li>
          <span>Capital:</span>
          {' '}
          {capital}
        </li>
      </ul>
    );
  }
}

export default Details;
