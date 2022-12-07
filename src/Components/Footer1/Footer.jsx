import React from 'react'
import './Footer.css'
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {FaTwitterSquare} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer-logo'>EGATOR</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='footer-socials'>
            <a href="http://facebook"><AiFillFacebook/></a>
            <a href="http://instagram"><BsInstagram/></a>
            <a href="http://twitter"><FaTwitterSquare/></a>
            <a href="http://linkedin"><AiFillLinkedin/></a>

        </div>
        <div className='footer-copyright'>
            <small>All rights reserved</small>

        </div>
    </footer>
  )
}

export default Footer
