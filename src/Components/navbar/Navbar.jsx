import React from 'react'
import './navbar.css'
import Logo from '../assets/logoDark.png';

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        
        <ul className="navList">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        
        <div className="navRight">
            <div className="lightMode">
            <i class="fa-solid fa-moon"></i>
            </div>
            <button>Contact</button>
        </div>

    </nav>
  )
}

export default Navbar