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
           <div className='introImage'>
              <img className="profile-img" src={require('../images/profile2.jpg')} alt="profile pic"  />
           </div>
            <div className='introText'>
              <h1>Hello, I'm Rishu!!!</h1>
              <h2>I'm a Full Stack Developer</h2>
            </div>
        </div>
        
        
        {/* SKILLS */}
        <div className='Skills'>
          <h1>Skills</h1>
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>React Js</h3>
          <h3>Node Js</h3>
          <h3>Mongo DB</h3>
          <h3>Firebase</h3>
        </div>
        {/* INTERNSHIP */}
        <div className="InternshipSection">
          <div className='allHeader'>
            <h1>Internship</h1>
            <h3>Software Developer Trainee<br/>Aztech Technology and Engineers Pvt. Ltd.</h3>
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