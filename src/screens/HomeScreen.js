import React from 'react';
import "./HomeScreen.css";
import Layout from './Layout';
// import Layout from "./Layout.js"

function HomeScreen() {
  return (
    <div className="HomeScreen">
        <Layout/>
        {/* <Nav /> */}
        <div className="Section">
          <div className='allHeader'>
            <h1>Rishu Kashyap</h1>
            <p>Full Stack Developer</p>
          </div>
          <div className="allContent">
            <ul>
              <li>Worked in a team of 4 members.</li>
              <li>Designed and developed the Front End of an E-commerce website using HTML, CSS and JavaScript.</li>
            </ul>
          </div>
        </div>
        <div className="Section">
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
        
    </div>
  )
}

export default HomeScreen;