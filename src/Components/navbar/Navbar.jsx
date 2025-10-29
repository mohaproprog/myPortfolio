import React, { useState } from 'react'
import './navbar.css'
import Logo from '../assets/logoDark.png';
import { useRef } from 'react';

function Navbar() {
  const [navListToggle, setNavlistToggle] = useState(false);
  const navListRef = useRef(null)
  const btnRef = useRef(null);
  function menuHandle(){
    if(!navListToggle){
      navListRef.current.style.right = 0;
      btnRef.current.style.right = "15px";
      setNavlistToggle(true)
    }
    else{
      navListRef.current.style.right = "-500px";
      btnRef.current.style.right = "-500px";
      setNavlistToggle(false)
    }

  }
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        
        <ul className="navList" ref={navListRef}>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        
        <div className="navRight">
            <div className="lightMode">
            <i className="fa-solid fa-moon "></i>
            </div>
            <button ref={btnRef}>Download Cv <i className="fa-solid fa-arrow-down"></i></button>
            {navListToggle? <i  className=" fa-solid fa-xmark menu2" onClick={menuHandle}></i>:  <i className="fa-solid fa-bars menu"onClick={menuHandle}></i> }
        </div>
        

    </nav>
  )
}

export default Navbar