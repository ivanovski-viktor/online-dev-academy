import "./CourseCardStyles.css"
import React from 'react'
import frontend from "../assets/Front-End.jpg"
import { NavLink } from "react-router-dom"

const CourseCard = () => {
  return (
    <div className="work-container">
      <h1 className="course-heading"> Courses </h1>
      <div className="course-container">
        <div className="course-card">
          <img src={frontend} alt="image"/>
          <h2 className="course-title">Front-End</h2>
          <div className="course-details">
            <p> Random tekst sho ke go updatenam posle </p>
            <div className="course-btns">
              <NavLink to="url.com" className="btn"> View </NavLink>
              <NavLink to="url.com" className="btn"> Source </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard