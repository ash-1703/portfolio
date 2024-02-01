import React from 'react';
//images
import logo from '../assets/logo.svg'
const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a>
          {/* <img src={logo} alt=''/> */}
          <h1 className="gradient-text" >ash-1703</h1>
          {/* <h2 className="text-white font-bold text-[36px]" >TUPE</h2> */}
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work with me</button>
        
      </div>
    </div>
  </header>;
};

export default Header;
