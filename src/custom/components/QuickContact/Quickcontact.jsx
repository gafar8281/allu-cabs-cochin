import React from 'react';
import './Quickcontact.scss';
import {IoCall} from 'react-icons/io5';

function Quickcontact() {
  return (
    <section className='quick-contact-section' onClick={() => {
      window.open('tel:+918590868047', '_blank');
    }}>
      <div className='quick-contact-container'>
        <div className='contact-content'>
          <div className='icon-wrapper'>
            <IoCall className='quick-call-callicon' />
          </div>
          <div className='text-content'>
            <h4>Get Instant Booking</h4>
            <h1>+91 85908 68047</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quickcontact