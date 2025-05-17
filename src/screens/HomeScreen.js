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
          <h3>React js</h3>
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>JAVA</h3>
          <h3>SQL</h3>
          <h3>Github</h3>
          <h3>Analytical Thinking</h3>
          <h3>Verbal Communication</h3>
          <h3>Team Collaboration</h3>
        </div>
        {/* INTERNSHIP */}
        <div className="InternshipSection">
          <div className='allHeader'>
            <h1>Internship</h1>
            <h3>Full-stack Development Intern<br/>Taruwar Agro Industries Private Limited</h3>
          </div>
          <div className="allContent">
            <ul>
              <li>Developed a responsive e-commerce site using Next.js, Tailwind CSS, and JavaScript to list and sell banana fibre
                  products, fertilizers, snacks, and machinery.
              </li>
              <li>Used MySQL to manage product data (price, quantity, description) and wrote SQL queries for dynamic display and
                  updates.
              </li>
              <li>Integrated AWS S3 for storing product images, improving performance and scalability.
              </li>
              <li>Implemented user authentication, shopping cart, and checkout features to support complete user interaction.
              </li>
              <li>Collaborated with stakeholders to troubleshoot issues and implement new features, ensuring data accuracy and smooth
                  operations.
              </li>
            </ul>
          </div>
          <div className='allHeader'>
            <h3>Software Developer Trainee<br/>Aztech Technology and Engineers Private Limited</h3>
          </div>
          <div className="allContent">
            <ul>
              <li>Built front-end modules for a shopping management system using ASP.NET and JavaScript.</li>
              <li>Collaborated with senior developers to identify and fix UI bugs, enhancing user experience.</li>
              <li>Wrote and debugged SQL queries for product and user data retrieval.</li>
            </ul>
          </div>
        </div>
        {/* EDUCATION */}
        <div className="EducationSection">
          
            <h1>Education</h1>
            <h2>Masters in Computer Applications</h2>
            <h3>Amity University</h3>
            <h3>Session: 2023-2025</h3>
          
            <h2>Bachelors in Computer Applications</h2>
            <h3>Patna Women's College</h3>
            <h3>Session: 2018-2021</h3>
            
        </div>
        <Footer/>
      </div>
  )
}

export default HomeScreen;
