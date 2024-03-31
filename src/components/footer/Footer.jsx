import React from 'react'
import './footer.css'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
export const Footer = () => {
  return (
    <footer>

      <a href="#" className="footer__logo" >PRANJAL BANSAL</a>


      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">

        <a href="https://facebook.com" target="blank"><AiFillFacebook /></a>
        <a href="https://instagram.com/pranjal_bansal_19" target="blank"><AiFillInstagram /></a>
        <a href="https://github.com/pranjalbansal787" target="blank"><AiFillGithub /></a>

      </div>

      <div className='footer__copyriight'>
        <small> &copy; PRANJAL BANSAL . All Rights Reserved.</small>
      </div>

    </footer>
  )
}
export default Footer;