import React from 'react';

export default function Contact() {
  return (
    <section>
    <div className='page-container'>
      <h2>Contact</h2>
      <form>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input type='text' className='form-control' id='name' placeholder='Name' />
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' id='email' placeholder='Email' />
            <div className='mb-3'>
              <label htmlFor='message' className='form-label'>Message</label>
              <textarea className='form-control' id='message' rows='5' placeholder='Message'></textarea>
              <button type='submit' className='btn btn-primary'>Send</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </section>
  );
}
