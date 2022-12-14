import React from 'react'
import {BsCheck} from 'react-icons/bs'
import './Service.css'

const Service = () => {
  return (
    <div>
      <section id='service'>
       <h5 >What I offer</h5>
       <h2>Services</h2>
       <div className='container services-container'>
        <article className='service'>
            <div className='service-head'>
                <h3>UI/UX Design</h3>
            </div>
            <ul className='service-list'>

            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
        
            </ul>
        </article>
        <article className='service'>
            <div className='service-head'>
                <h3>Web Development</h3>
            </div>
            <ul className='service-list'>

            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
        
            </ul>
        </article>
        <article className='service'>
            <div className='service-head'>
                <h3>Content Creator</h3>
            </div>
            <ul className='service-list'>

            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
        
            </ul>
        </article>
       </div>
        </section>
    </div>
  )
}

export default Service
