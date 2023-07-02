import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
        <NavLink to="/home">Home</NavLink>
        </li>
        <li>
        <NavLink to="/listings">Listings</NavLink>
        </li>
        <li>
        <NavLink to="/listingsform">List a Home</NavLink>
        </li>
        </ul>
    </div>
  );
}

export default NavBar;