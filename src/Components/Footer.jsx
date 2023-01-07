import React from 'react'

export const Footer = () => {
  return (
    <div className='foot'>
        <div className='dis'>
          <p>Connect with a growing community of lerners</p>
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
              <button className='btn'>GET STARTED</button>
        </div>
    </div>
  )
}
