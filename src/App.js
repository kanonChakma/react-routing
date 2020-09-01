import React from "react";
import "./styles.css";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotMatch from "./Component/NotMatch/NotMatch";
import CountryDetail from "./Component/CountryDetail/CountryDetail";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/country/:countryname">
            <CountryDetail></CountryDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
