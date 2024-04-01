import React from 'react';
import './contact.css';
import { GrMail } from 'react-icons/gr'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mwwv3ad', 'template_ilbbsis', form.current, 'aiYhkY60CJBjLVMlM')

    e.target.reset();

  };


  return (
    <section id='contact'>
      <h5> Get In touch</h5>
      <h2> Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">

          <article className="contact__option">
            <GrMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>pranban12@gmail.com</h5>
            <a href='mailto:pranban12@gmail.com' target="__blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <AiFillInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Pranjal Bansal</h5>
            <a href="https://www.instagram.com/pranjal_bansal_19" target="__blank">Send a Message</a>
          </article>


          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Send Message</h5>
            <a href="https://wa.me/+917088634891" target="__blank">Send a Message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>

          <input type="text" name='name' placeholder="Your Full Name" required></input>
          <input type="email" name='email' placeholder="Your Email" required></input>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>



    </section>
  )
}

export default Contact