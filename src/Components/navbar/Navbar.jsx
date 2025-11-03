import React, { useEffect, useState, useRef } from 'react'
import './navbar.css'
import LogoDark from '../assets/logoDark.png';
import LogoLight from '../assets/logoLight.png';

function Navbar() {
  const [navListToggle, setNavlistToggle] = useState(false);
  // initialize from localStorage so state is correct on first render
  const [darkModeToggle, setDarkModeToggle] = useState(() => {
    try {
      return localStorage.getItem('darkMode') === 'true';
    } catch{
      return false;
    }
  });
  // ---------menu and navbar responsiv----------
  const navListRef = useRef(null)
  const btnRef = useRef(null);
  function menuHandle(){
    if(!navListToggle){
      navListRef.current.style.right = 0;
      navListRef.current.style.left = "100px";
      btnRef.current.style.right = "120px";
      setNavlistToggle(true)
    }
    else{
      navListRef.current.style.right = "-500px";
      navListRef.current.style.left = "";
      btnRef.current.style.right = "-500px";
      setNavlistToggle(false)
    }
  }
  // ----------------darkmode---------
  // keep body class and localStorage in sync whenever darkModeToggle changes
  useEffect(()=>{
    if (darkModeToggle){
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
    try {
      localStorage.setItem("darkMode", darkModeToggle ? 'true' : 'false');
    } catch{ /* ignore */ }
  },[darkModeToggle]);

  function handleDarkMode(){
    setDarkModeToggle(prev => !prev);
  }
  return (
    <nav className='navbar'>
        <div className="logo">
            {!darkModeToggle? <img src={LogoDark} alt="" />: <img src={LogoLight} alt="" />}
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
              {darkModeToggle
                ? <i className="fa-solid fa-sun" onClick={handleDarkMode}></i>
                : <i className="fa-solid fa-moon" onClick={handleDarkMode}></i>
              }
            </div>
            <button ref={btnRef}>Download Cv <i class="fa-solid fa-circle-down"></i></button>
            {navListToggle? <i  className=" fa-solid fa-xmark menu2" onClick={menuHandle}></i>:  <i className="fa-solid fa-bars menu"onClick={menuHandle}></i> }
        </div>
    </nav>
  )
}

export default Navbar