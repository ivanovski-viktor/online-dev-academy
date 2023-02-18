import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BckImg2 from '../components/BckImg2'
import AboutContent from '../components/aboutcontent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <BckImg2 heading="ONLINE DEV ACADEMY" text="Work In Progress"/>
      <AboutContent />
      <Footer/>
      </div>
  )
}

export default About