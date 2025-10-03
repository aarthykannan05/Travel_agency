import React from "react";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Travel Agency</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#packages">Packages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
