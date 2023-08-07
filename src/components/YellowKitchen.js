import React from 'react';
import '../css/YellowKitchen.css'
import Rectangle10 from '../images/Rectangle10.png';
import Rectangle11 from '../images/Rectangle11.png';
import Rectangle12 from '../images/Rectangle12.png';
import Rectangle13 from '../images/Rectangle13.png';
const YellowKitchen = () => {
  return (
    <div className='yellow-cont'>
        <div className='yellow-header'>
        <p>#YellowKitchens <span>in instagram</span></p>
        </div>
        <div className='dishes-cont'>
            <img src={Rectangle10} alt=''/>
            <img src={Rectangle11} alt=''/>
            <img src={Rectangle12} alt=''/>
            <img src={Rectangle13} alt=''/>
        </div>
    </div>
  )
}

export default YellowKitchen