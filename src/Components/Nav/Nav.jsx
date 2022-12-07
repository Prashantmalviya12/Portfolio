import React, { useState } from 'react'
import './Nav.css'
import {AiOutlineHome } from 'react-icons/ai';
import {BsFillPersonFill } from 'react-icons/bs';
import {BsBookFill } from 'react-icons/bs';
import {RiServiceLine } from 'react-icons/ri';
import {BiMessageAltDetail } from 'react-icons/bi';

const Nav = () => {
    const[activeNav,setActiverNav] = useState('#');
  return (
    <>
    <nav>
        <a href="#" onClick={()=> setActiverNav('#')} className={activeNav === "#"? 'active' :''}><AiOutlineHome /></a>
        <a href="#about" onClick={()=> setActiverNav('#about')} className={activeNav === "#about"?'active':''}><BsFillPersonFill/></a>
        <a href="#experience" onClick={()=> setActiverNav('#experience')} className={activeNav === "#experience"?'active':''}><BsBookFill/></a>
        <a href="#service" onClick={()=> setActiverNav('#service')} className={activeNav === "#service"?'active':''}><RiServiceLine/></a>
        <a href="#contact" onClick={()=> setActiverNav('#contact')} className={activeNav === "#contact"?'active':''}><BiMessageAltDetail/></a>
    </nav>
      
    </>
  )
}

export default Nav
