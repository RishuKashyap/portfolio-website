import React from 'react'
import Layout from './Layout'
import './Layout.css'
import "./FormScreen.css"
import Footer from './Footer'


function FormScreen() {
  return (
    <div className="FormScreen">
        <Layout/>
        <div className='Form-image'>
        <div className='Form'>
        <form action="https://formsubmit.co/sakhtlambda@gmail.com" method='post'>
            <input type="text" name="name" placeholder='Enter your Name' />
            <input type="text" name="email" placeholder='Enter your Email id' />
            <input type="textarea" name="message" placeholder='Write your message' />
            <input type="hidden" name="_next" value="https://rishukashyap.github.io/portfolio-website/"/>
            <input type="submit" className="form-submit-button" value="Submit" />
        </form>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default FormScreen