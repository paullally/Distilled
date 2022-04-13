import React from "react";
import {Container } from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Countries from './components/countries'
import Country from './components/country'

export default function BasicExample() {
  return (
    <Container>
    <Router>
        <Routes>
          <Route exact path="/" element= {<Countries />}>
            
          </Route>
          <Route path="/:name"  element={<Country />}>
            
          </Route>
        </Routes>
     
    </Router>
    </Container>
  );
}


