import React, { useState, useEffect } from "react";
import Country from "../Country/Country";
const Home = () => {
  const [countryInfo, setCountryInfo] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountryInfo(data));
  }, []);
  const country = countryInfo.slice(0, 50);
  return (
    <div>
      <h2>Country Length is: {country.length}</h2>
      {country.map((cd) => (
        <Country country={cd} key={cd.alpha3Code}></Country>
      ))}
    </div>
  );
};
export default Home;
