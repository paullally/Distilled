import React from 'react';
import axios from 'axios';
import './App.css';
import Countries from './components/countries'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
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
      <Container>
 

      <Countries countryData={this.state.countryData} />

      </Container>
    )
  }
}

export default App;