import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Countries from './components/countries'
import Country from './components/country'
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element= {<Countries />}>
            
          </Route>
          <Route path="/:name"  element={<Country />}>
            
          </Route>
        </Routes>
     
    </Router>
  );
}


