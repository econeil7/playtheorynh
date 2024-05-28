import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
            <li>
                <div class="dropdown">
                    <a href="#about">About</a>
                    <div class="dropdown-content">
                        <a href="#">Our Mission, Vision & Values</a>
                        <a href="#">Toy Libraries</a>
                        <a href="#">Membership & Lending</a>
                        <a href="#">Cleaning & Safety</a>
                        <a href="#">The Importance of Play</a>
                    </div>
                </div>
            </li>
        <li><a href="#services">Membership</a></li>
        <li><a href="#services">FAQs</a></li>
        <li><a href="#services">Our Toys</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
