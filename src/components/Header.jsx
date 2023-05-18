import React from 'react'

const Header = () => {
  return <nav>
    <NavContent />
  </nav>
}

const NavContent = () => (

    <>
    <h2>Satyam.</h2>
    <div>
       <a href="#home">Home</a> 
       <a href="#work">Work</a>
       <a href="#timeline">Experience</a>
       <a href="#services">Services</a> 
       {/* <a href="#testimonial">Testimonial</a> */}
       <a href="#contact">Contact</a> 
    </div>
    <a href="mailto:satish.jais112@gmail.com">
        <button>E-mail</button>
    </a>
    </>
)

export default Header
