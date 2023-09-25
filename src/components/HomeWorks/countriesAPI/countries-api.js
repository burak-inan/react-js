import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const CountriesAPI = () => {
  const [countries, setCountries] = useState([]);

  const loadData = async () => {
    const resp = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(resp.data);
    console.log(resp.data);
    // console.log(resp.data.filter((obj) => obj.hasOwnProperty("currencies")));
    // console.log(resp.data[2]);
    // console.log(resp.data.filter(contry=> Object.keys(contry.currencies??{}).length>1));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Country Flag</th>
          <th>Country Name</th>
          <th>Population</th>
          <th>Capital</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <tr key={country.cca3}>
            <td>{index + 1}</td>
            <td><img src={country.flags.png} alt="" style={{width:"5rem"}}/></td>
            <td>{country.name.common}</td>
            <td>{country.population}</td>
            <td>{country.capital??"-"}</td>
            <td>{Object.values(country.currencies??{}).map((currency)=> currency.symbol).join(" , ")??"-"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CountriesAPI;
