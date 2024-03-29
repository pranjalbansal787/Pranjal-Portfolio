import React from 'react'
import './header.css'
import CTA from './CTA'
import pranjal123 from '../../Assets/pranjal123.jpeg'
import HeaderSocials from './HeaderSocials'


export const Header = () => {
  return (
    <header>

      <div className="container header__container">

        <h5> Hello I'm</h5>
        <h1> Pranjal Bansal </h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={pranjal123} alt="my pic" />

        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>


      </div>

    </header>
  )
}
export default Header;
