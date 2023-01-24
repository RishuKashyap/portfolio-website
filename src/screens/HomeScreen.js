import React from 'react';
import "./HomeScreen.css";
import Layout from './Layout';
import Footer from './Footer'

function HomeScreen() {
  return (
    <div className="HomeScreen">
        <Layout/>
        {/* INTRODUCTION */}
        <div className="IntroSection">
          <div className='allHeader'>
            <h1>Namaste &#x1f64f;, I'm Rishu!!!</h1>
            <h2>I'm a Full Stack Developer</h2>
            <img className="profile-img" src={require('../images/profilePic.jpg')} alt="" height="300rem" width="240rem" />
            
          </div>
        </div>
        {/* SKILLS */}
        <div className='Skills'>
          <h1>Skills</h1>
          <h2>HTML</h2>
          <h2>CSS</h2>
          <h2>JavaScript</h2>
          <h2>React Js</h2>
          <h2>Node Js</h2>
          <h2>Mongo DB</h2>
          <h2>Firebase</h2>
        </div>
        {/* INTERNSHIP */}
        <div className="InternshipSection">
          <div className='allHeader'>
            <h1>Internship</h1>
            <p>Software Developer Trainee<br/>Aztech Technology and Engineers Pvt. Ltd.</p>
          </div>
          <div className="allContent">
            <ul>
              <li>Worked in a team of 4 members.</li>
              <li>Designed and developed the Front End of an E-commerce website using HTML, CSS and JavaScript.</li>
            </ul>
          </div>
        </div>
        {/* EDUCATION */}
        <div className="EducationSection">
          
            <h1>Education</h1>
            <h2>Masters in Computer Applications</h2>
            <h3>Amity University</h3>
            <h3>Session: 2022-2024</h3>
          
            <h2>Bachelors in Computer Applications</h2>
            <h3>Patna Women's College</h3>
            <h3>Session: 2018-2021</h3>
            
        </div>
        <Footer/>
      </div>
  )
}

export default HomeScreen;