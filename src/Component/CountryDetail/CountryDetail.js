import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const CountryDetail = () => {
  const { countryname } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryname}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data[0]));
  }, []);
  const { flag,name, capital, region,altSpellings } = details;
  const infoStyle={
    width:'300px',
    border:'1px solid gray'
  }
  return (
    <div style={infoStyle}>
      <h1>this is {countryname} country details</h1>
      <img  src={flag} alt=""/>
      <h3>name:{name}</h3>
      <h3>capital is:{capital}</h3>
      <h3>Region is:{region}</h3>
    </div>
  );
};
export default CountryDetail;
