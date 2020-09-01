import React from "react";
import { Link } from "react-router-dom";
const Country = (props) => {
  const { name, capital } = props.country;
  const countryStyle = {
    border: "1px solid gray",
    margin: "20px",
    padding: "10px",
    width: "70%"
  };
  return (
    <div style={countryStyle}>
      <h4>Country Name is:{name}</h4>
      <h4>Country Capital is:{capital}</h4>
      <button>{name} details</button>
      <Link to={`/country/${name}`}>{name} details</Link>
    </div>
  );
};
export default Country;
