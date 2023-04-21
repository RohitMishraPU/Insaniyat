import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookMessenger} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rdgwjqx', 'template_i47bmph', form.current, 'MTYV6iX4XhpNCNsEN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>bips4lcs@gmail.com</h5>
            <a href="mailto:bips4lcs@gmail.com" target='_blank'>Send a mail</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Biplab Mahato</h5>
            <a href="https://m.me/100004214773667/" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Ping in WhatsApp</h5>
            <a href="https://web.whatsapp.com/send?phone=+918972089184&text=&app_absent=0" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End Of Contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="5" placeholder='Leave Your message' required></textarea>
          <button type='submmit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact