import React, { useState } from "react";
import logo from "../images/church_logo.png";
import "../churchInto.css";
import { Link } from "react-router-dom";



export const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 650) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  // const handleAdminPage = ()=> {
  //   navigate("/Admin")
  // }
  return (
    <section
      className=
      {
        colorChange ? "navbarOnScrollY" : "navbarContainer"
      }
      id="header"
    >
     
      <div className="logoContainer">
        <div className="logo">
          <img src={logo} alt="Redeem Logo" />
        </div>
      </div>
      <div className="linkContainer">
        <a href="#churchIntro">Welcome</a>
        <a href="#weekly">Church Programmes</a>
        <a href="#testimony">Testimonies</a>
        <a href="#birthdays">Birthdays</a>
        <a href="#contact">Contact Us</a>
        <div className="adminButton">
        <Link to="/adminportal" target="_blank" rel="norepetter">Admin</Link>
        </div>
        
      </div>
    </section>
  );
};
