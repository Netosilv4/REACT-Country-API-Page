/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './globalStyles.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CountryContainer from './components/CountryContainer';
import MoreDetails from './components/MoreDetails';

function App() {
  return (
    <BrowserRouter className="App">
      <Route path="" component={Header} />
      <Switch>
        <Route exact path="/" component={CountryContainer} />
        <Route exact path="/:id/details" component={MoreDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
