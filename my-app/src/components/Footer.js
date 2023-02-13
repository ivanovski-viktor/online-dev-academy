import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, 
    FaPhone, FaTwitter } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container"> 
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={
                        {color: "#fff", marginRight: "2rem"}
                    }/>
                </div>
                <div>
                    <p>бул.Партизански Одреди 42/2</p>
                    <p className="par">Скопје</p>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={
                        {color: "#fff", marginRight: "2rem"} }/> 
                        +389-78-231-233
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={
                        {color: "#fff", marginRight: "2rem"} }/> 
                        ivanovski.viktor@uklo.edu.mk ИНКИ602
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>
                    За компанијата
                </h4>
                <p>
                    Ние сме семејство кое е секогаш тука за вашите едукативни потреби.
                    Лоцирани сме во Скопје, но нудиме опција за курсевите да се одржат on-line
                    доколку не сте во можност да присуствувате.
                </p>
                <div className="social">
                <FaFacebook size={30} style={
                 {color: "#fff", marginRight: "1rem"} }/> 
                <FaTwitter size={30} style={
                 {color: "#fff", marginRight: "1rem"} }/> 
                <FaLinkedin size={30} style={
                 {color: "#fff", marginRight: "1rem"} }/> 
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer