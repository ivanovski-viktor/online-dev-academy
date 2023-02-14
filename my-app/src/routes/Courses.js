import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BckImg2 from '../components/BckImg2'
import PricingCard from '../components/PricingCard'

const Courses = () => {
  return (
    <div>
      <Navbar/>
      <BckImg2 heading="COURSES" 
      text="Некои од наставните програми кои ги нудиме"/>
      <PricingCard/>
      <Footer/>
      </div>
  )
}

export default Courses