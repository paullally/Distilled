import React from 'react';
import axios from 'axios';
import './App.css';

import Countries from './components/countries'

class App extends React.Component {
  state = {
    countryData: []
   
  }

  componentDidMount() {
    axios.get(`https://restcountries.com/v3.1/all`)
      .then(res => {
        const countryData = res.data;
        this.setState({ countryData });
      })
  }

  render() {
    return (
      <Countries countryData={this.state.countryData} />
      // <ul>
      //   { this.state.countryData.map(country => <li>{country.name}</li>)}
      // </ul>
    )
  }
}

export default App;