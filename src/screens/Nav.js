import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css";

function Nav() {
  return (
    
    <div className="Nav">
        <li className="NavList"><Link to="/">Home</Link></li>
        <li className='NavList'><a href="https://www.linkedin.com/in/rishukashyap">Linkedin</a></li>
        <li className='NavList'><Link to="/Form">Contact</Link></li>
         
    </div>

    
  )
}

export default Nav