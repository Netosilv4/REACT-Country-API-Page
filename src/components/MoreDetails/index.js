/* eslint-disable react/prop-types */
import React from 'react';
import Details from './Details';
import EspecificDetails from './MoreDetails';
import './style.css';

class MoreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.fetchCountry = this.fetchCountry.bind(this);
    this.state = {
      pais: {},
      name: props.match.params.id,
      loading: true,
    };
  }

  componentDidMount() {
    const { name } = this.state;
    this.fetchCountry(name);
  }

  async fetchCountry(name) {
    let details = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
    details = await details.json();
    this.setState(({
      pais: details,
      loading: false,
    }));
  }

  render() {
    const { loading, pais } = this.state;

    if (loading) {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        <h1>Carregando</h1>
      );
    }
    return (
    // eslint-disable-next-line react/jsx-filename-extension

      <main className="MoreDetails">
        <div className="FlagContainer">
          <img src={pais[0].flag} alt={`${pais[0].name} flag`} />
        </div>
        <div className="ListContainer">
          <div className="ListWrapper">
            <Details
              name={pais[0].name}
              nativeName={pais[0].nativeName}
              region={pais[0].region}
              capital={pais[0].capital}
              population={pais[0].population}
              subRegion={pais[0].subregion}
            />
            <EspecificDetails
              topLevel={pais[0].topLevelDomain.join(', ')}
              currencies={pais[0].currencies.map((language) => language.name).join(', ')}
              languages={pais[0].languages.map((language) => language.name).join(', ')}
            />
          </div>

        </div>
      </main>
    );
  }
}

export default MoreDetails;
