
import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <section className='contact'>
      <div className='container'>
        <h2 className='contact-title'>Contact Us</h2>
        <form className='contact-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' className='form-control' placeholder='Your Name' />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' className='form-control' placeholder='Your Email' />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' className='form-control' placeholder='Your Message'></textarea>
          </div>
          <button type='submit' className='contact-btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact