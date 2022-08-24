import React from 'react'
import './Header.css'
import ButtonEmail from '../../components/buttonEmail/ButtonEmail'
import ButtonLinkedin from '../../components/buttonLinkedin/ButtonLinkedin'
import Footer from '../../components/Footer/Footer'

function Header() {
  return (
    <header className="header">
      <h1>Kevin Kalimba</h1>
      <h2>Front Developer</h2>
      <p className="site">kevin.kalimbasite</p>
      <div className= "button">
        <ButtonEmail className="btn-email"/>
        <ButtonLinkedin />
      </div>
      <div className='content-container'>
        <div className='contentOne'>
          <h3>About</h3>
          <p>
            Am a frontend developer with different interests,
            I try to keep up with security and best practices, 
            and am always looking for new things to learn.
          </p>
        </div>
        <div className='contentTwo'>
          <h3>Interests</h3>
          <p>
             soccer.  developer. 
            Entrepreneur. music . Reading. 
          </p>
        </div>
      </div>
      <Footer />
    </header>
  )
}

export default Header
