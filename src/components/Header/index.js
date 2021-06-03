/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './styles.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <header className="Header">
        <h1 className="HeaderTitle">Where is the world?</h1>
        <p>Dark Mode</p>
      </header>
    );
  }
}

export default Header;
