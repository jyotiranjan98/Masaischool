import React from 'react'

export const Footer = () => {
  return (
    <div className='foot'>
        <div className='dis'>
          <div>
          <p>Connect with a growing <br/>community of lerners</p>
          </div>
          <button>JOIN OUR DISCORD</button>
        </div>
        <div id='logo'>  
          <img src='https://www.masaischool.com/img/footer/masai-logo.svg' alt=''/>

        </div>
        <div className='links'>
            <div>
              <p>Masai Alumni</p>
              <p>Our Team</p>
              <p>Careers</p>
              <p>Referral Program</p>
              <p>Masai Learn</p>
            </div>
            <div>
                <p>Hire From Us</p>
                <p>Our Investors</p>
                <p>Testimonials</p>
                <p>Blog</p>
                <p>Scholarship</p>
            </div>
            <div>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Newsroom</p>
            <p>Contact Us</p>
            <p>Program’d by Masai</p>
            </div>
            <div className="footd">
          <div>
            <p className="foottext">Get Started</p>
            <p className="footpara">Join the Program</p>
          </div>
          <button className="fbtn">GET STARTED</button>
        </div>
        </div>
        <p id='res'> © 2023 by Masai School | A Nolan Edutech Pvt Ltd Venture</p>
    </div>
  )
}
