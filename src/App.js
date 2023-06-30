import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Home';
import Listings from './Listings';
import Card from './Card';
// import Select from "react-select";


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
      <Home homes={homes} />
      <Listings homes={homes} />
      <Card homes={homes} />
    </div>
  );
}

export default App;
