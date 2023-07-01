import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/listings">Listings</NavLink>
        <NavLink to="/listingsform">ListingsForm</NavLink>
    </div>
  );
}

export default NavBar;