
import LogoCampana from '../../../assets/logos/Logo-I-E-La-Campana.png'
import './Logo.css'

import React from 'react'

const Logo = () => {
  return (
    <div className="logo">
          <img src={LogoCampana} alt="" />
          <h1>Institución Educativa La Campana</h1>
    </div>
  );
}

export default Logo
