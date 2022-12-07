import React from 'react'
import "./Contact2.css"
import {SiGmail} from 'react-icons/si'
import {AiFillLinkedin} from 'react-icons/ai'

const Contact2 = () => {
  return (
    <>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact-container'>
          <div className='contact-options'>
            <article className='contact-option'>
              <SiGmail/>
              <h4>Email</h4>
              <h5>PrashantMalviya13@gmail.com</h5>
              <a href="mailto:prashantmalviya13@gmail.com" target='_blank' rel="noreferrer">send a message</a>
            </article>
            <article className='contact-option'>
              <AiFillLinkedin/>
              <h4>Linkedin</h4>
              <h5>Prashant Malviya</h5>
              <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bv7z2HVExRcq8jzeDNPJ4qw%3D%3D" target='_blank' rel="noreferrer">send a message</a>
            </article>
          </div>
          <form action="">
            <input type="text" name='name' placeholder='your full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='your message' required></textarea>
            <button type='submit' className='btn btn-primary'>send message</button>
          </form>
        </div>
        
      </section>
    </>
  )
}

export default Contact2
