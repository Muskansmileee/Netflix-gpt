import React from 'react';
import logo from "../resources/Netflix_Logo.png"

const Header = () => {
  return (
    <div className='absolute z-10 px-12 py-2 bg-gradient-to-b from-black'>
      <img src = {logo} alt ="Netflix-logo" className='w-40'/>
    </div>
  )
}

export default Header;