/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import CountryCard from './CountryCard';
import './style.css';
import Searchbar from '../Searchbar';

class CountryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetchCountrys = this.fetchCountrys.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.filterByname = this.filterByname.bind(this);
    this.state = {
      paises: {},
      filteredCountrys: {},
      loading: true,
      search: '',
      selectOption: 'Africa',
    };
  }

  componentDidMount() {
    this.fetchCountrys();
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState(({
      [name]: value,
    }), () => this.filterByname());
  }

  async fetchCountrys() {
    let paises = await fetch('https://restcountries.eu/rest/v2/all');
    paises = await paises.json();
    this.setState({
      paises,
      filteredCountrys: paises,
      loading: false,
    });
  }

  filterByname() {
    const { paises, search, selectOption } = this.state;
    if (search.length !== 0) {
      this.setState(({
        filteredCountrys:
        paises.filter((pais) => pais.name.toUpperCase().includes(search.toUpperCase())),
      }));
    } else {
      this.setState({
        filteredCountrys: paises.filter((pais) => pais.region === selectOption),
      });
    }
  }

  render() {
    const {
      loading, filteredCountrys, search, selectOption,
    } = this.state;

    if (loading) {
      return (
        <div>Carregando</div>
      );
    }

    return (
      <section>
        <Searchbar search={search} selectOption={selectOption} changeHandler={this.changeHandler} />
        <main className="CountryContainer">
          { filteredCountrys.map((pais) => (
            <CountryCard
              key={pais.name}
              className="CountryCard"
              name={pais.name}
              imagePath={pais.flag}
              capital={pais.capital}
              population={pais.population}
              region={pais.region}
            />
          ))}
        </main>
      </section>
    );
  }
}

export default CountryContainer;
