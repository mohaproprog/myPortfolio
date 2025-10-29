import './about.css'
import about from '../assets/about.jpg'


function About() {
  return (
    <div className='about'>
        <div className="aboutImg">
            <img src={about} alt="" />
        </div>
        <div className="aboutText">
            <p>I’m Mohamed Elmi, a Frontend Developer passionate about creating seamless user experiences.
Skilled in React.js, JavaScript, HTML, CSS, and Tailwind for building modern web interfaces.
I also work with Node.js to bring dynamic functionality to the backend.
Design matters to me—Figma helps me craft intuitive and visually appealing layouts.
Constantly learning and improving to turn ideas into interactive digital products</p>
<button className='cv'>Download Cv <i className="fa-solid fa-chevron-down"></i></button>
<button>Contact me <i className="fa-solid fa-reply"></i></button>
        </div>
    </div>
  )
}

export default About