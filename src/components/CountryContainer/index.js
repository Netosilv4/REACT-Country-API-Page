/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import CountryCard from './CountryCard';
import './style.css';
import Searchbar from '../Searchbar';

const load = './load.gif';
class CountryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetchCountrys = this.fetchCountrys.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.filterByname = this.filterByname.bind(this);
    this.openCard = this.openCard.bind(this);
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
    this.setState({
      loading: true,
    });
    if (search.length !== 0) {
      this.setState(({
        filteredCountrys:
        paises.filter((pais) => pais.name.toUpperCase().includes(search.toUpperCase())),
        loading: false,
      }));
    } else {
      this.setState({
        filteredCountrys: paises.filter((pais) => pais.region === selectOption),
        loading: false,
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  openCard({ target }) {
    console.log(target);
  }

  render() {
    const {
      loading, filteredCountrys, search, selectOption,
    } = this.state;

    if (loading) {
      return (
        <div className="Loading"><img src={load} alt="Loading Gif" /></div>
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
