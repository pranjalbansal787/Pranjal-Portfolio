import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillInstagram}  from 'react-icons/ai'
import {AiFillGithub}  from 'react-icons/ai'

export const HeaderSocials = () => {
  return (
    <div class="header__socials">
    <a href="https://linkedin.com" target="_blank"><AiOutlineLinkedin/></a>
    <a href="https://instagram.com" target="_blank"><AiFillInstagram/></a>
    <a href="https:/github.com" target="_blank"><AiFillGithub/></a>
    </div>
  )
}
export default HeaderSocials
