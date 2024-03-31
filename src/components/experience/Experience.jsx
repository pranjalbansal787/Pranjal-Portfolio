import React from 'react'
import './experience.css'
import { MdVerified } from 'react-icons/md'

const Experience = () => {
  return (
    <section id="experience">

      <h5> What Skills I have</h5>
      <h2>My Experience</h2>


      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Frontend Development</h3>
          <div className="experience__content">

          <div>
              <article className="experience_details">
                <MdVerified className="experience__details-icon" />
                <h4>REACT JS</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>

            <div>
              <article className="experience_details">
                <MdVerified className="experience__details-icon" />
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>

            <div>
              <article className="experience_details">
                <MdVerified className="experience__details-icon" />
                <h4>TYPESCRIPT</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>

            <div>
              <article className="experience_details">
                <MdVerified className="experience__details-icon" />
                <h4>NEXTJS</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>

            <div>
              <article className="experience_details">
                <MdVerified className="experience__details-icon" />
                <h4>REDUX</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>

            <div>
              <article className="experience_details">
                <MdVerified className="experience__details-icon" />
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>

            <div>
              <article className="experience_details">
                <MdVerified className="experience__details-icon" />
                <h4>CSS/SCSS</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>

            <div>
              <article className="experience_details">
                <MdVerified className="experience__details-icon" />
                <h4>TAILWIND</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>

          </div>

        </div>
        <div className="experience__backend">
          <h3> Backend Development</h3>

          <div className="experience__content">

          <div>
              <article className="experience_details">
                <MdVerified className="experience__details-icon" />
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>

            <div>
              <article className="experience_details">
                <MdVerified className="experience__details-icon" />
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>

            <div>
              <article className="experience_details">
                <MdVerified className="experience__details-icon" />
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>

            <div>
              <article className="experience_details">
                <MdVerified className="experience__details-icon" />
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>
            

          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience