import './footer.css';

function Footer() {
    const date = new Date().getFullYear();

  return (
    <footer className='footer'>
        <h3>Mohamed Elmi</h3>
        <div className="socialMedia">
            <a href="https://x.com/mo_progr?t=w_t7x0VGPg0fIlONCQbBOA&s=09" target='_blank' ><i className="fa-brands fa-x-twitter"></i></a>
             <a href="https://www.linkedin.com/in/mohamed-elmi-b1a7722a9" target='_blank' ><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://wa.me/qr/MO2LRVFJ4LSKA1" target='_blank' ><i className="fa-brands fa-whatsapp"></i></a>
        
            <a href="https://x.com/mo_progr?t=w_t7x0VGPg0fIlONCQbBOA&s=09" target='_blank' ><i className="fa-brands fa-x-twitter"></i></a>
        


        </div>
        <p>&copy; {date} Mohamed Elmi. All rights reserved.</p>
    </footer>
  )
}

export default Footer