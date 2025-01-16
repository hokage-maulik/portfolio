import React from 'react';
import { Link } from 'react-router-dom';
import "../Style/Navbar1.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">Portfolio</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
            <li className="nav-item" style={{display:"flex",alignItems:"center"}}>
              <a lassName="nav-link"  href='/Maulik.pdf' style={{textDecoration:"none",color:"#ffffff8c",fontWeight:"bold",fontSize:'1.2rem',padding:"10px 15px"}}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
