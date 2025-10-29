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
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-x-twitter"></i>
      </div>
      <img src={heroImage} alt="" />
    </div>
  )
}

export default Hero