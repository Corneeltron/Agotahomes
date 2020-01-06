import React, { useState } from "react";
<<<<<<< HEAD
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

// Used React Hooks to create states inside a functional component
function App() {
  const [location, setLocation] = useState(""); // State used inside of the location/city dropdown (which is a react.select component)
  const [category, setCategory] = useState(""); // State used inside of the category dropdown (a react.select component)
  const [data, setData] = useState({ results: [] });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Functionality of the Submit button, under the dropdowns
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
    setIsSubmitted(true);
  };

  // React.select styling syntax, used for the two dropdown components. Add styles here.
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "green" : "grey"
    })
  };

  // Table Header categories
  const headings = [
    "Name",
    "Description",
    "Address",
    "City",
    "Zip",
    "Hours",
    "Phones",
    "Website",
    "Bookmark"
  ];

  // Creation of table. handleSubmit makes an axios call to the api and maps into the data Hooks state as an array of all shelters contained as individual objects.
  // Each result.prop is a prop on an individual shelter object. Can make a postman get request to api to check format.
  const rows = data.results.map((result, i) => {
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
        <td key={i}>
          <Button outline color="info" size="sm">
            Save
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <Jumbotron className="jumbotron" fluid>
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
        <br />
        <br />
      </Container>
      {isSubmitted && <ResultsTable headings={headings} rows={rows} />}
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

// Results Table Component

function ResultsTable({ headings, rows }) {
  return (
    <Table hover>
      <thead>
        <tr>
          {headings.map((heading, i) => {
            return <th key={i}>{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
export default App;
=======
// import "./App.css";
import Favorites from '../Component/favComponent.js'
import SignUp from '../Component/signUpComponent.js'
import Login from '../Component/loginComponent.js'
import Select from 'react-select';
function App() {
  const [locations, setLocations] = useState([
    {
      city: 'Arcadia'
    },
    {
      city: 'Burbank'
    },
    {
      city: 'Canoga Park'
    },
    {
      city: 'Claremont'
    },
    {
      city: 'Compton'
    },
    {
      city: 'El Monte'
    },
    {
      city: 'Glendale'
    },
    {
      city: 'Hollywood'
    },
    {
      city: 'Lancaster'
    },
    {
      city: 'Lawndale'
    },
    {
      city: 'Long Beach'
    },
    {
      city: 'Los Angeles'
    },
    {
      city: 'North Hills'
    },
    {
      city: 'North Hollywood'
    },
    {
      city: 'Palmdale'
    },
    {
      city: 'Pasadena'
    },
    {
      city: 'Pomona'
    },
    {
      city: 'San Gabriel'
    },
    {
      city: 'San Pedro'
    },
    {
      city: 'Santa Monica'
    },
    {
      city: 'Upland'
    },
    {
      city: 'Venice'
    },
    {
      city: 'Whittier'
    },
    {
      city: 'Wilmington'
    },
    {
      city: 'Winnetka'
    },
  ]);
  return(
    <div> 
       <Favorites /> 
       <SignUp />
       <Login />
        </div>
    
    // <Select optionType={locations} />
  );
}

export default App;
>>>>>>> a3748eb1cefe55dfb516361a07718c6bcadfa931
