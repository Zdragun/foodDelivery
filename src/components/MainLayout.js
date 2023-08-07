import React from 'react';
import '../css/MainLayout.css'
import Photoplate from '../images/Photo-plate.png';
import Timeeat from '../images/TimeEat.svg';
import Delivery from '../images/Delivery.svg';
import Paris from '../images/Paris.svg';


const MainLayout = () => {
  return (
    <main>
      <section>
      <div className='container-title'>
        <h1 className='main-title'>Your Food court <br />at home</h1>
        <button>
          <b>Delivery</b>
          <p>Order in</p>
        </button>
        <button>
          <b>Takeout</b>
          <p>Grab and go</p>
        </button>
      </div>
      <div className='container-img'>
        <img src={Photoplate} alt='salat' />
      </div>
      </section>
      <section>
      <div className='action-container'>
        <div className='items item-1'>
          <img src={Timeeat} alt='' />
          <p>delivery in all paris in less than 30 minutes</p>
        </div>
        <div className='items item-2'>
          <img src={Delivery} alt='' />
          <p>Free delivery from 29 euros</p>
        </div>
        <div className='items item-3'>
          <img src={Paris} alt='' />
          <p>Only fresh and French products</p>
        </div>
      </div>
      </section>
    </main>
  )
}

export default MainLayout