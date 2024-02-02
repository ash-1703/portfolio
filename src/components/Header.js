import React from 'react';
import {Link} from 'react-scroll'
const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a>
          <h1 className="gradient-text" >ash-1703</h1>
        </a>
        {/* button */}
        <Link to='contact' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={1000}
        className='btn btn-sm pt-4'> Work with me
        </Link>
      </div>
    </div>
  </header>;
};

export default Header;
