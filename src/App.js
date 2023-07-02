import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Home';
import Listings from './Listings';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import ListingsForm from './ListingsForm';


function App() {

  const [homes, setHome] = useState([]);

  useEffect(() => { async function getHome() {
    const response = await fetch('http://localhost:3333/homes');
    const data = await response.json();
    setHome(data);
  }
  getHome();  
  }, []);

  const onAddHome = (newHome) => {
    setHome([...homes, newHome])
  }
  return (
    <div>
      <NavBar />
      <Route exact path="/" >
      <Home homes={homes} />
      </Route>

      <Route path="/listings" > 
      <Listings homes={homes} />
      </Route>

      <Route path="/listingsform" >
      <ListingsForm onAddHome={onAddHome} homes={homes} />
      </Route>
      </div>
  );
}
export default App;
