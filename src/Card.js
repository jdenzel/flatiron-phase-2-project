import React from "react";

function Card({ homes }) {
    return (
        <div  className="card">
        {homes.map((home, index) => (
        <div key={index}>
          <h1>{home.county}</h1>
          <img src={home.image} alt="home"  />
          <h1>{home.type}</h1>
          <p>{home.beds} Beds</p>
          <p>{home.bathrooms} Baths</p>
          
        </div>
      ))}
        </div>
    );
}

export default Card;