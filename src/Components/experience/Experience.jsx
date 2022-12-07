import React from 'react'
import './Experience.css'
import {RiHtml5Fill} from 'react-icons/ri'
import {FaCss3Alt} from 'react-icons/fa'
import {DiBootstrap} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {SiJava} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {IoLogoJavascript}  from 'react-icons/io'
import {DiNodejs}  from 'react-icons/di'

const Experience = () => {
  return (
    <>
      <section id='experience'>
        <h5>What Skills I have </h5>
        <h2>My Experience</h2>

        <div className='container experience-container'>
            <div className="experience-frontend">
                <h3 >frontend Development</h3>
                <div className="experience-content">
                    <article className='experience-details'>
                        <RiHtml5Fill className='experience-details-icon'/>
                        <div>

                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <FaCss3Alt className='experience-details-icon'/>
                        <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Experienced</small>

                        </div>
                    </article>
                    <article className='experience-details'>
                        <DiBootstrap className='experience-details-icon'/>
                        <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>

                        </div>
                    </article>
                    <article className='experience-details'>
                        <DiReact className='experience-details-icon'/>
                        <div>
                        <h4>React JS</h4>
                        <small className='text-light'>Experienced</small>

                        </div>
                    </article>
                </div>
            </div>
            <div className="experience-backend">
                <h3 >BackEnd Development</h3>
                <div className="experience-content">
                    <article className='experience-details'>
                        <SiJava className='experience-details-icon'/>
                        <div>
                        <h4>Java</h4>
                        <small className='text-light'>Experienced</small>

                        </div>
                    </article>
                    <article className='experience-details'>
                        <SiMysql className='experience-details-icon'/>
                        <div>
                        <h4>MySQL</h4>
                        <small className='text-light'>Experienced</small>

                        </div>
                    </article>
                    <article className='experience-details'>
                        <IoLogoJavascript className='experience-details-icon'/>
                        <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Experienced</small>

                        </div>
                    </article>
                    <article className='experience-details'>
                        <DiNodejs className='experience-details-icon'/>
                        <div>
                        <h4>Node JS</h4>
                        <small className='text-light'>Experienced</small>

                        </div>
                    </article>
                </div>
            </div>

        </div>

      </section>
    </>
  )
}
export default Experience
