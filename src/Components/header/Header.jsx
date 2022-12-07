import React from 'react'
import './Header.css'
import CV from '../../assesr/CV.pdf'
import me from '../../assesr/Me1.png'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
const Header = () => {
  return (
    <>
      <header>
        <div className='container header-container'>
          <h5>Hello I'm</h5>
          <h1>Prashant Malviya</h1>
          <h5 className='text-light'>FullStack Developer</h5>
          <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
          <div className='header-socials'>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://Facebook.com" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub/></a>
          </div>
          <div className='me'>
            <img src={me} alt="me"/> 

          </div>
          <a href='#content' className='scroll-down'>Scroll Down</a>

        </div>
      </header>
    </>
  )
}

export default Header
