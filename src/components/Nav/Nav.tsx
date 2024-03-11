"use client";

import "./Nav.css";
import "./Burger.css";

import { useState } from "react";
import LogoImage from "../../assets/LOGO3.png";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggle}
        className={`burger ${isOpen ? "open" : ""}`}
        id="burger"
      >
        <span className="burger__span"></span>
        <span className="burger__span"></span>
        <span className="burger__span"></span>
        <span className="burger__span"></span>
      </button>
      <div className={isOpen ? "nav" + " " + "navOpen" : "nav"}>
        <div className="navContent">
          <Link to="/" className="logo">
            <div className="logoWrapper">
              <img src={LogoImage} alt="" />
            </div>
          </Link>
          <ul className="linksWrapper">
            <li>
              <Link className="link" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="link" to="/transparencia" onClick={toggle}>
                Transparencia
              </Link>
            </li>
            <li>
              <Link className="link" to="/contacto" onClick={toggle}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
