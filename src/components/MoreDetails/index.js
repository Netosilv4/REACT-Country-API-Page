/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import BorderButtons from './BorderButtons';
import Details from './Details';
import EspecificDetails from './MoreDetails';
import './style.css';

class MoreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.fetchCountry = this.fetchCountry.bind(this);
    this.redirectHandler = this.fetchCountry.bind(this);
    this.state = {
      pais: {},
      code: props.match.params.id,
      loading: true,
      redirect: false,
      redirectCode: '',
    };
  }

  componentDidMount() {
    const { code } = this.state;
    this.fetchCountry(code);
  }

  async fetchCountry(code) {
    let details = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
    details = await details.json();
    this.setState(({
      pais: details,
      loading: false,
    }));
  }

  redirectHandler(code) {
    if (code) {
      this.setState({
        redirectCode: code,
        redirect: true,
      });
    } else {
      this.setState({
        redirectCode: 'home',
        redirect: true,
      });
    }
  }

  render() {
    const {
      loading, pais, redirect, redirectCode,
    } = this.state;

    if (redirect) {
      <Redirect to={`${redirectCode}/details`} />;
    }

    if (loading) {
      return (
        <h1>Carregando</h1>
      );
    }
    return (
      <main className="MoreDetails">
        <div className="ButtonContainer">
          <Link to="/">
            Back
          </Link>
        </div>
        <div className="FlagContainer">
          <img src={pais.flag} alt={`${pais.name} flag`} />
        </div>
        <div className="ListContainer">
          <Details
            name={pais.name}
            nativeName={pais.nativeName}
            region={pais.region}
            capital={pais.capital}
            population={pais.population}
            subRegion={pais.subregion}
          />
          <EspecificDetails
            topLevel={pais.topLevelDomain.join(', ')}
            currencies={pais.currencies.map((language) => language.name).join(', ')}
            languages={pais.languages.map((language) => language.name).join(', ')}
          />
          <div className="BorderButtons">
            <h1>Border countries: </h1>
            <div>
              {pais.borders.map((border) => (
                <BorderButtons
                  name={border}
                  redirectHandler={() => this.redirectHandler(border)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default MoreDetails;
