import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BckImg2 from '../components/BckImg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <BckImg2 heading="CONTACT" text="Reach out to us!"/>
      <Form/>
      <Footer/>
      </div>
  )
}

export default Contact