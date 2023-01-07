import React from 'react'

export const Navbar = () => {
  return (
        <div className='nav'>
            <div >
                <img src='https://www.masaischool.com/img/navbar/logo.svg' alt='logo'/>
            </div>
            <div className='tags'>
            <p>COURSES</p>
            <p>REFER & EARN</p>
            <p>FEES & PAP</p>
            <p>FEES RESOURCES</p>
            <p>FOR CORPORATES</p>
            <button>FOR STUDENTS</button>
            <button>LOGIN</button>
            </div>
        </div>
  )
}
