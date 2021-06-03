/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './style.css';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      search, selectOption, changeHandler,
    } = this.props;
    return (
      <div className="FilterBar">
        <label className="SearchInput" htmlFor="search">
          <input
            name="search"
            placeholder="Search for a country..."
            value={search}
            onChange={changeHandler}
          />
        </label>
        <label className="SelectFilter" htmlFor="select">
          <select name="selectOption" value={selectOption} onChange={changeHandler}>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Searchbar;
