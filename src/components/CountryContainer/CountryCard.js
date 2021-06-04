/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

class CountryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      imagePath, name, population, region, capital, code,
    } = this.props;
    return (
      <div className="CountryCard">
        <div className="ImageContainer">
          <img src={imagePath} alt={`${name} flag`} />
        </div>
        <h1>{name}</h1>
        <ul>
          <li>
            <span>Population:</span>
            {' '}
            {population}
          </li>
          <li>
            <span>Region:</span>
            {' '}
            {region}
          </li>
          <li>
            <span>Capital:</span>
            {' '}
            {capital}
          </li>
        </ul>
        <Link to={`/${code}/details`}>Mais detalhes</Link>
      </div>
    );
  }
}

export default CountryCard;
