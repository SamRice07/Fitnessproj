import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import $ from 'jquery'
import * as AiIcons from 'react-icons/ai'
import { NavLink } from "react-router-dom";

export default function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink  to="/" className="nav-logo">
              Chibber
              <i className="fas fa-code"></i>
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  
                  to="/"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Placeholder
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  
                  to="/about"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Placeholder
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  
                  to="/blog"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Placeholder
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  
                  to="/contact"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Placeholder   
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    )
}
