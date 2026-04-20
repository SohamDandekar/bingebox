import React from 'react';
import logo from "../assets/BingeBox_Logo.png";

const Header = () => {
  return (
    <div className='w-72 absolute left-20 bg-gradient-to-b from-black z-30'>
        <img src={logo} alt="bingebox-logo"/>
    </div>
  )
}

export default Header