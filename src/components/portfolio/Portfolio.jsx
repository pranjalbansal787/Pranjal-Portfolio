import React from 'react'
import './portfolio.css'
import musicplayer from '../../Assets/musicplayer.jpg'
import awesome from '../../Assets/awesome.png'
import portfolioo from '../../Assets/portfolioo.jfif'
import Foodorderwebsite from '../../Assets/Foodorderwebsite.png'
import Hotstarss from '../../Assets/Hotstarss.jpg'
import passwordgenerator from '../../Assets/passwordgenerator.jpg'


export const Portfolio = () => {
  return (
    <>
      <section id='portfolio'>

        <h5> My Recent Work</h5>
        <h2> Portfolio </h2>

        <div className='container portfolio__container'>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={Hotstarss} />
            </div>
            <h3>Disney+ Hotstar Clone</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/pranjalbansal787/Disney-Hotstar' className='btn' target="_blank">Github</a>
              <a href="https://disney-hotstar-by-pranjalbansal.vercel.app/" className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
          </article>


          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={awesome} />
            </div>
            <h3>Awesome Landing Page</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/pranjalbansal787/Awesome-Landing-pages' className='btn'>Github</a>
              <a href="https://guileless-sopapillas-e527fc.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={Foodorderwebsite} />
            </div>
            <h3>Food Ordering Website</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/pranjalbansal787/Food-Order-website' className='btn'>Github</a>
              <a href="https://656c317968c8cf5a6b97e809--capable-gumdrop-4bd50f.netlify.app/?#" className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={musicplayer} />
            </div>
            <h3>It's A Music Player</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/pranjalbansal787/music-player' className='btn' target="_blank">Github</a>
              <a href="https://pranjal-bansal-20cdd5.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={passwordgenerator} />
            </div>
            <h3>Password Generator</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/pranjalbansal787/password-generator-react' className='btn' target="_blank">Github</a>
              <a href="https://password-generator-react-4u21.vercel.app/" className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
          </article>



          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={portfolioo} />
            </div>
            <h3>My Portfolio</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com' className='btn' target="_blank">Github</a>
              <a href="#" className="btn btn-primary">Live Demo</a>
            </div>
          </article>

        </div>


      </section>

    </>
  )
}

export default Portfolio;
