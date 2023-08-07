import React, { useState } from 'react';
import '../css/Header.css';
import Logo from '../images/Logo.svg';
import Person from '../images/Person.svg';
import Cart from '../images/Cart.svg';
import Call from '../images/Call.svg'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <div className='logo-container'>
        <a href='#'>
          <img src={Logo} alt='Logo' className='img-logo' />
        </a>
      </div>
      <nav className={`navbar-container`}>
        <div className='navbar-item'>
          <a href='#'>
            <img src={Person} alt='person icon' />
          </a>
          <span>Log in</span>
        </div>
        <div className='navbar-item'>
          <a href='#'>
            <img src={Cart} alt='cart-logo' />
          </a>
          <span>0</span>
        </div>
        <div className={`btn-cont ${isMenuOpen ? 'menu-open' : ''}`} onClick={handleMenuToggle}>
          {isMenuOpen ? (
            <RxCross1 style={{ width: 24, height: 24 }} />
          ) : (
            <RxHamburgerMenu style={{ width: 24, height: 24 }} />
          )}
          <div className={`${isMenuOpen ? 'modal-cont' : 'hidden-vis'}`}>
            <div className='call-info'>
              <img src={Call} alt='call' />
              <div className='number'>
                <strong>0800 111 126</strong>
                <p>8:00 - 22:00</p>
              </div>
            </div>
            <div className='str-txt'>
            <div className='stroke-burg'></div>
            <p>Delivery info</p>
            <div className='stroke-burg'></div>
            <p>About us</p>
            <div className='stroke-burg'></div>
            <p>Restaurants</p>
            <div className='stroke-burg'></div>
            <p>Specialities</p>
            <div className='stroke-burg'></div>
            </div>
            <div className='s'>
              <select name="select">
                <option value="value1">Spain</option>
                <option value="value2" selected>English</option>
                <option value="value3">Ukraine</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header