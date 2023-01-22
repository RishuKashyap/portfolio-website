import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css";
function Nav() {
  return (
    <div className="Nav">
        <li id='one'><Link to="/">Home</Link></li>
        <li id='two'><a href="https://www.linkedin.com/in/rishukashyap">Linkedin</a></li>
        <li id='three'><Link to="/Form">Leave a message</Link></li>
         
    </div>
  )
}

export default Nav