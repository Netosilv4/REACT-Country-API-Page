/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './globalStyles.css';
import Header from './components/Header';

import CountryContainer from './components/CountryContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <CountryContainer />
    </div>
  );
}

export default App;
