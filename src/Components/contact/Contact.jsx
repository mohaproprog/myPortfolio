import './contact.css'

function Contact() {
  return (
    <div className="contact">
        <div className="contactText">
            <h4>Let’s get in touch. I’m open to new opportunities, collaborations, or just sharing knowledge—send a message and let’s start a conversation</h4>
            <div className="contactInfo">
                <i className="fa-solid fa-envelope"></i>
                <p>mohaanaselmi@gmail.com</p>
            </div>
            <div className="contactInfo">
                <i className="fa-solid fa-phone-volume"></i>
                <p>447442386195</p>
            </div>
            <div className="contactInfo">
                <i className="fa-solid fa-location-dot"></i>
                <p>United Kingdom, Avon, Bristol</p>
            </div>

        </div>
        <div className="contactForm">
            <form action="">
                <input type="number" placeholder='Enter your number' required />
                <input type="email" placeholder='Enter your Email' required />
                <textarea name="" placeholder='Enter your messege here' required></textarea>
                <button type='submt'>Submit</button>
            </form>
        </div>

    </div>
  )
}

export default Contact