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
          Top Level Domain:
          {' '}
          {topLevel}
        </li>
        <li>
          Currencies:
          {' '}
          {currencies}
        </li>
        <li>
          Languages:
          {' '}
          {languages}
        </li>
      </ul>
    );
  }
}

export default EspecificDetails;
