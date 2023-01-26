import React from 'react'
import Layout from './Layout'
import Footer from './Footer'
import './ProjectScreen.css'
function ProjectScreen() {
  return (
    <div className='ProjectScreen'>
        <Layout/>
        <h1>NETFLIX CLONE</h1>
        <h2>Description: </h2>
        <div className="screenshots">
            <img className='netflixImg' src={require('../images/netflix1.png')} alt='screenshot'/>
            <img className='netflixImg' src={require('../images/netflix2.png')} alt='screenshot'/>
        </div>
        <Footer/>
    </div>
  )
}

export default ProjectScreen
