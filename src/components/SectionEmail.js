import React from 'react'
import '../css/SectionEmail.css';

const SectionEmail = () => {
  return (
    <div className='email-container'>
      <div><p>Your nearest restaurants</p>
        <p>Each kitchen works with its own delivery area <br /> to deliver food to you as soon as possible</p>
      </div>
      <div className='input-con'>
        <input type='text' placeholder='Enter delivery address' />
        <button>send</button>
      </div>
    </div>
  )
}

export default SectionEmail