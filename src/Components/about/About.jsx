import './about.css'
import about from '../assets/about.jpg'
import fakeCv from '../assets/fakeCv.pdf';
import { Link } from 'react-scroll';


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
<button className='cv'><a href={fakeCv} download>Download Cv</a> <i className="fa-solid fa-chevron-down"></i></button>
<button><Link to="contact" smooth={true} duration={500} spy={true} offset={-100}>Contact me <i className="fa-solid fa-reply"></i></Link></button>
        </div>
    </div>
  )
}

export default About