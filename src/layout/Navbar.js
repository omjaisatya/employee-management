import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Employee Management
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
