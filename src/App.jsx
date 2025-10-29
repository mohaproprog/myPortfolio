import React from 'react'
import Navbar from './Components/navbar/Navbar.jsx';
import Hero from './Components/hero/Hero.jsx';
import Title from './Components/title/Title.jsx';
import About from './Components/about/About.jsx';
import Skills from './Components/skills/Skills.jsx';
import Service from './Components/service/Service.jsx';
import Project from './Components/projects/Project.jsx';
import Contact from './Components/contact/Contact.jsx';
import Footer from './Components/footer/Footer.jsx';

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Title title="About Me" subtitle="Passionate creator turning ideas into digital experiences"/>
        <About/>
         <Title title="Skills" subtitle="A blend of creativity, clean code, and modern web technologies"/>
        <Skills/>
        <Title title="Service" subtitle="We offer modern, responsive, and user-focused web solutions"/>
        <Service/>
        <div className="container">
          <Title title="My Projects" subtitle="Showcasing my work in modern frontend development"/>
        <Project/>
        <Title title="Contact" subtitle="I’d love to hear from you—get in touch!"/>
        <Contact/>
        <Footer/>
        </div>

        
        



    </div>
  )
}

export default App