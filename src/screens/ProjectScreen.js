import React from 'react'
import Layout from './Layout'
import Footer from './Footer'
import './ProjectScreen.css'
function ProjectScreen() {
  return (
    <div className='ProjectScreen'>
        <Layout/>
        <div className="Netflix">
        <div className="NetflixDetails">
        <h1>NETFLIX CLONE</h1>
        <p>This NETFLIX clone is built using REACT js, HTML, CSS, JavaScript, Redux, Firebase and TMDB API.<br/>It has a Sign Up and Sign in page which is backed by FireBase Email Authentication.<br/>All the movie images and meta data is made available using the TMDB API.</p>
        </div>
        <div className="screenshots">
            <img className='netflixImg' src={require('../images/netflix1.png')} alt='screenshot'/>
            <img className='netflixImg' src={require('../images/netflix2.png')} alt='screenshot'/>
        </div>
        <div className="screenshots">
            <img className='netflixImg' src={require('../images/netflix3.png')} alt='screenshot'/>
            <img className='netflixImg' src={require('../images/netflix4.png')} alt='screenshot'/>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProjectScreen
