import "./BckImgStyles.css"

import React from 'react'

import IntroImg from "../assets/Background-Img.png"
import { Link } from "react-router-dom"

const BckImg = () => {
  return (
    <div className="bck">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="BckIMG"/>
        </div>
        <div className="content">
            <p>Започни тука!</p>
            <h1>ONLINE DEVELOPER ACADEMY</h1>
        <div className="btn-margin">
            <Link to="/Courses"
            className="btn">COURSES</Link>
            <Link to="/Contact"
            className="btn btn-light">CONTACT</Link>
        </div>
        </div>
    </div>
  )
}

export default BckImg