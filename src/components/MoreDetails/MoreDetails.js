/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

class EspecificDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      topLevel, currencies, languages,
    } = this.props;
    return (
      <ul className="RightList">
        <li>
          <span>Top Level Domain:</span>
          {' '}
          {topLevel}
        </li>
        <li>
          <span>Currencies:</span>
          {' '}
          {currencies}
        </li>
        <li>
          <span>Languages:</span>
          {' '}
          {languages}
        </li>
      </ul>
    );
  }
}

export default EspecificDetails;
