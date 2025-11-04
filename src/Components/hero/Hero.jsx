import React from 'react'
import './hero.css'
import heroImage from '../assets/HeroImage.png'

function Hero() {
  return (
    <div className='hero'>
      <i className="fa-solid fa-code codeShadow"></i>
      <div className="heroText">
        <p className="name">Hi, i'm <span>Mohamed Elmi</span></p>
        <h2>i'm <span>FrontEnd </span>developer <br />Based in bristol</h2>
        <p>i make responsive websites and user friendly using the new tecknologies</p>
        <a href="https://github.com/mohaproprog" target='_blank' ><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/mohamed-elmi-b1a7722a9" target='_blank' ><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://x.com/mo_progr?t=w_t7x0VGPg0fIlONCQbBOA&s=09" target='_blank' ><i className="fa-brands fa-x-twitter"></i></a>
        
        
        
      </div>
      <div className="heroImg">
        
      <img src={heroImage} alt="" />
      </div>
    </div>
  )
}

export default Hero