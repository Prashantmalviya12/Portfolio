import React from 'react'
import './About.css'
import me from '../../assesr/Me.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <section id='about'>
       <h5>Get To Know</h5>
       <h2>About Me</h2>

       <div className='container about-container'>
        <div className="about-me">
            <div className="about-me-image">
                <img src={me} alt="..." />
            </div>
        </div>
        <div className="about-content">
            <div className="about-cards">
                <article className='about-card'>
                    <FaAward className='about-icon'/>
                    <h5>Experience</h5>
                    <small>2+ years working</small>
                </article>
                <article className='about-card'>
                    <FaAward className='about-icon'/>
                    <h5>clints</h5>
                    <small>200+ worldwide</small>
                </article>
                <article className='about-card'>
                    <FaAward className='about-icon'/>
                    <h5>Projects</h5>
                    <small>80+ completed</small>
                </article>
            </div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium assumenda saepe facere commodi fuga, facilis veniam architecto quae at pariatur voluptas accusantium suscipit itaque dolorem quos aut, cupiditate totam laboriosam.

            </p>
            <a href='#contact'className='btn btn-primary'>Let's TalK</a>
        </div>
       </div>
      </section>
    </div>
  )
}

export default About
