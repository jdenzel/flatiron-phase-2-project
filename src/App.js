import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Home';
import Listings from './Listings';
import { Route } from "react-router-dom";


function App() {

  const [homes, setHome] = useState([]);

  useEffect(() => { async function getHome() {
    const response = await fetch('http://localhost:3333/homes');
    const data = await response.json();
    setHome(data);
  }
  getHome();  
  }, []);

  return (
    <div>
      <Route path="/" >
      <Home homes={homes} />
      </Route>  
      <Route path="/listings" > 
      <Listings homes={homes} />
      </Route>
      </div>
  );
}
export default App;
