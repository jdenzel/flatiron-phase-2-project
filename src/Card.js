import React from "react";

function Card({ homes }) {
  return (
    <div  >
      {homes.map((home, index) => (
        <div className="card" key={index}>
          <h1>Price: {home.price}</h1>
          <img src={home.image} alt="home" />
          <p>{home.beds} Beds <span>{'\u25CF'}</span> {home.bathrooms} Baths</p>
          <p>{home.address}, </p> <p> {home.county}, MD</p>
        </div>
      ))}
    </div>
  );
}

export default Card;