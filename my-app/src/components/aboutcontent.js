import "./AboutContentStyles.css"

import React from 'react'
import frontend from "../assets/Front-End.jpg";
import backend from "../assets/back-end.png";


const aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Кои сме ние?</h1>
            <p>ONLINE DEVELOPER ACADEMY е академија која специјализира во брзо едуцирање на почетни програмери се до професионалци</p>
        </div>
        <div className="right">
            <div
            className="img-container">
                <div className="img-stack top">
                    <img src={frontend} className="img" alt="true"/>
                </div>
                <div className="img-stack bot">
                    <img src={backend} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default aboutcontent