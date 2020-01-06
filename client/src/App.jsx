import React, { useState } from "react";
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