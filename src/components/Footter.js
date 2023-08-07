import React from 'react'
import '../css/Footer.css';
import Logo2 from '../images/Logo2.svg';
import appimg1 from '../images/app-img1-1.png';
import appimg2 from '../images/app-img2-1.png';
import Instagram from '../images/Instagram.svg';
import Facebook from '../images/Facebook.svg';
import Twitter from '../images/Twitter.svg';


const Footter = () => {
    return (
        <footer>
            <div className='main-container'>
                <div className='info-cont'>
                    <div className='cont-logo'>
                        <img src={Logo2} alt='logo-kitchen' />
                        <div className='stroke'></div>
                        <div className='banner-cont'>
                            <div>
                                <img src={appimg1} alt='logo-playmarket' />
                            </div>
                            <div>
                                <img src={appimg2} alt='logo-google-play' />
                            </div>
                        </div>
                    </div>
                    <div className='privacy-text'>
                        <div className='about-us'>
                            <h3 className='head'>About us</h3>
                            <ul>
                            <li>Concept</li>
                            <li>Franchise</li>
                            <li>Business</li>
                            <li>Restaurant signup</li>
                            <li>For Investors</li>
                            </ul>
                        </div>
                        <div className='get-help'>
                            <h3 className='head'>Get help</h3>
                            <ul>
                            <li>Read FAQs</li>
                            <li>Restaurants</li>
                            <li>Specialities</li>
                            <li>Sign up to deliver</li>
                            </ul>
                            <select name="select">
                                <option value="value1">Spain</option>
                                <option value="value2" selected>English</option>
                                <option value="value3">Ukraine</option>
                            </select>
                        </div>
                        <div className='contact-us'>
                            <h3 className='head'>Contact us</h3>
                            <ul>
                            <li>Yellow kitchen Paris 11</li>
                            <li>69 avenue de la Republique 75011<br />Paris</li>
                            <li>0800 111 126</li>
                            <li>contact@yellowkitchens.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='media-cont'>
                    <div className='icon-cont'>
                        <img src={Instagram} alt='insta' />
                        <img src={Twitter} alt='twitter' />
                        <img src={Facebook} alt='fac' />
                    </div>
                    <div className='terms-cond'>
                        <p>Privacy Policy</p>
                        <p>Terms</p>
                        <p>© 2020 Yellow kitchen</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footter