import "./NavbarStyles.css"

import React, {useState} from 'react'
import { Link } from "react-router-dom"

import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

    const [click, setClick] = useState (false);
    const handleClick = () => setClick (!click);

  return (
    <div className="header" onClick={handleClick}>
        <Link to="/">
            <h1>
            Online Developer Academy
            </h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Courses">Courses</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <div className="dropdown">
            {click ? (<FaTimes size={20} style = {{color: "#fff"}} />) 
            : (<FaBars size={20} style = {{color: "#fff"}} />)}

            
        </div>
    </div>
  )
}

export default Navbar