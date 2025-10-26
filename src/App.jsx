import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero'
import Title from './Components/title/Title'
import About from './Components/about/About'
import Skills from './Components/skills/skills'

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Title title="About Me" subtitle="Passionate creator turning ideas into digital experiences"/>
        <About/>
        <Title title="Skills" subtitle="A blend of creativity, clean code, and modern web technologies"/>
        <Skills/>


    </div>
  )
}

export default App