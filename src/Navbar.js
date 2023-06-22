import React from "react";
import "./Navbar.css"
import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#333333",color:"white"}}>
      {/* <a className="navbar-brand" href="#">Navbar</a> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#" >
              Skin Care <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Body & Hand
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Hair
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Fragrance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Kits & Travel
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Gifts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Read
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Stores
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Facial Appointments
            </a>
          </li>
          <li className="nav-item">
            <BsSearch style={{ marginTop: "14px" }} />
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav" style={{marginLeft:"470px"}}>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Log in
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
                Cabinet
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
                Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
