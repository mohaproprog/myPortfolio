import { useState } from 'react';
import './contact.css'

function Contact() {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3a255173-5523-47af-9e60-f1f8f39e6912");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


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
            <form onSubmit={onSubmit}>
                <input type="text" name='name' placeholder='Enter your Name' required />
                <input type="email" name='email' placeholder='Enter your Email' required />
                <textarea name="messege" placeholder='Enter your messege here' required></textarea>
                <button type='submt'>Submit</button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact