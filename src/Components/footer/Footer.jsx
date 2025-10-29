import './footer.css';

function Footer() {
    const date = new Date().getFullYear();

  return (
    <footer className='footer'>
        <h3>Mohamed Elmi</h3>
        <div className="socialMedia">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-github"></i>


        </div>
        <p>&copy; {date} Mohamed Elmi. All rights reserved.</p>
    </footer>
  )
}

export default Footer