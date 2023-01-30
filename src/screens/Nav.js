import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css";

function Nav() {
  const[show, setShow] = useState(false);
  return (
    <div>
    <div className="Nav">
        <button className="hamBurgerIcon" onClick={()=>setShow(!show)}><img src={require('../images/hamburgerIcon1.png')} alt='click'/></button>
        
        
        <div className="NavList">
        <li className="NavList"><Link to="/">Home</Link></li>
        <li className="NavList"><Link to="/Projects">Projects</Link></li>
        <li className='NavList'><a href="https://www.linkedin.com/in/rishukashyap">Linkedin</a></li>
        <li className='NavList'><Link to="/Form">Contact</Link></li>
        </div>
    </div>
    
    {show && <div className="HamBurgerMenu">
          <li className="HamBurgerList"><Link to="/">Home</Link></li>
          <li className="HamBurgerList"><Link to="/Projects">Projects</Link></li>
          <li className='HamBurgerList'><a href="https://www.linkedin.com/in/rishukashyap">Linkedin</a></li>
          <li className='HamBurgerList'><Link to="/Form">Contact</Link></li>
      </div>
      
    }
    </div>

    
  )
}

export default Nav

