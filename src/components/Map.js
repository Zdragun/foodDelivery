import React from 'react'
import '../css/Map.css';
 import MapsicleMap from '../images/MapsicleMap.png';
const Map = () => {
    return (
        <section className='map-cont'>
        <div className='image-container'>
          <img src={MapsicleMap} alt='Map' className='map-image' />
        </div>
      </section>
    )
}

export default Map