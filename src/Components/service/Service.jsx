import './service.css';

function Service() {
  return (
    <div className='services'>
        <div className="service">
            <i class="fa-solid fa-chalkboard-user"></i>
            <h3>Frontend Training & Mentorship</h3>
            <p>I teach individuals and teams modern frontend technologies, helping them master tools like React, Tailwind, and CSS in real-world projects</p>
        </div>
        <div className="service">
            <i class="fa-solid fa-pen-nib"></i>
            <h3>UI/UX Implementation</h3>
            <p>I turn Figma or design mockups into clean, interactive interfaces that reflect your brand and provide users with a smooth, engaging experience.</p>
        </div>
        <div className="service">
            <i class="fa-solid fa-link"></i>
            <h3>API Integration</h3>
            <p>I connect frontend interfaces with RESTful and GraphQL APIs, ensuring smooth data exchange and reliable communication with backend systems.</p>
        </div>
        <div className="service">
            <i class="fa-solid fa-bug"></i>
            <h3>Website Maintenance & Updates</h3>
            <p>I provide regular updates, bug fixes, and improvements to keep your website modern, secure, and running smoothly.</p>
        </div>
        <div className="service">
            <i class="fa-solid fa-code"></i>
            <h3>Frontend Architecture</h3>
            <p>I plan and structure frontend codebases using best practices, creating clean, scalable, and maintainable architecture that ensures your website can grow efficiently over time.</p>
        </div>
        <div className="service">
            <i class="fa-brands fa-figma"></i>
            <h3>UI/UX Design in Figma</h3>
            <p>I design modern, user-focused interfaces in Figma, creating clean layouts and smooth user flows that make every interaction simple and engaging.</p>
        </div>

    </div>
  )
}

export default Service