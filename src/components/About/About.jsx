import React from 'react'
import './about.css'
import imgg from '../../Assets/imgg.jpeg';
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BsBookHalf } from 'react-icons/bs'
import { BsPeopleFill } from 'react-icons/bs'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2> About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>

            <img src={imgg} />

          </div>

        </div>
        <div className="about__content">
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Software Developer @ Asteria Aerospace</small>
            </article>



            <article className='about__card'>
              <BsPeopleFill className='about__icon' />
              <h5>Clients</h5>
              <small>10+ Allover</small>
            </article>



            {<article className='about__card'>
              <BsBookHalf className='about__icon' />
              <h5>Education</h5>
              <small>B.Tech(CSE)</small><br></br>
              <small> Lovely Professional University</small>
            </article>
            }


            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects </h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About;