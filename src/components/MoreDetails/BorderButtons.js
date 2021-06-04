/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

class BorderButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { name, redirectHandler } = this.props;
    return (
      <button type="button" onClick={redirectHandler}>{name}</button>
    );
  }
}

export default BorderButtons;
