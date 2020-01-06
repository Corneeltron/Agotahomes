import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import locationsArray from "./locationsArray";
import categoriesArray from "./categoriesArray";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Table,
  Jumbotron,
  Container
} from "reactstrap";
import StateManager from "react-select";

function App() {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState({ results: [] });

  const handleSubmit = e => {
    e.preventDefault();
    if (!location || !category) {
      alert("Please provide both location and category selections");
      return;
    }
    axios
      .get(
        `http://localhost:3000/api?location=${location}&category=${category}`
      )
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "green" : "grey"
    })
  };

  return (
    <React.Fragment>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to Agota Homes</h1>
          <p className="lead">Find a shelter near you.</p>
        </Container>
      </Jumbotron>
      <Container sm={{ size: 6, order: 2, offset: 1 }}>
        <Select
          placeholder="Please enter a city..."
          styles={customStyles}
          options={locationsArray}
          onChange={value => setLocation(value.label)}
        />
        <br />
        <Select
          placeholder="What kind of shelter are you looking for?"
          styles={customStyles}
          options={categoriesArray}
          onChange={value => setCategory(value.label)}
        />
        <br />
        <Button
          id="subbutton"
          color="info"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
      <br />
      <br />
      <br />
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>City</th>
            <th>Zip</th>
            <th>Hours</th>
            <th>Phones</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((result, i) => {
            return (
              <tr>
                <td key={i}>{result.Name}</td>
                <td key={i}>{result.description}</td>
                <td key={i}>{result.addrln1}</td>
                <td key={i}>{result.city}</td>
                <td key={i}>{result.zip}</td>
                <td key={i}>{result.hours}</td>
                <td key={i}>{result.phones}</td>
                <td key={i}>{result.url}</td>
                <Button size="sm">Add</Button>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
}
export default App;
