import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/listings">Listings</NavLink>
        <NavLink to="/listingsform">List a Home</NavLink>
    </div>
  );
}

export default NavBar;