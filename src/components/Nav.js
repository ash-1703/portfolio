import React from 'react';
//import in=cons
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase,BsChatSquareText } from 'react-icons/bs'
import { FaCogs } from "react-icons/fa";
//link
import {Link} from 'react-scroll'
const Nav = () => {

  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className = "container mx-auto">
      {/* nav inner */}
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50 '>
        <Link to='home' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiHomeAlt/>
        </Link>
        <Link to='about' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={100}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiUser/>
        </Link>
        <Link to='services' 
        activeClass='active'
        smooth={true}
        spy={true}
        // offset={20}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsClipboardData/>
        </Link>
        <Link to='skills' 
        activeClass='active'
        smooth={true}
        spy={true}
        // offset={20}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <FaCogs/>
        </Link>
        <Link to='work' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={100}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsBriefcase/>
        </Link>
        <Link to='contact' 
        activeClass='active'
        smooth={true}
        spy={true}
        // offset={-500}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsChatSquareText/>
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav





// import React, { useState, useEffect } from 'react';
// import { BiBriefcase, BiHomeAlt, BiUser } from 'react-icons/bi';
// import { BsClipboardData, BsChatSquareText } from 'react-icons/bs';
// import { FaCogs } from 'react-icons/fa';
// import { Link, scroller } from 'react-scroll';

// const Nav = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const handleSetActive = (to) => {
//     setActiveSection(to);
//   };

//   // Optional: Scroll to the active section when the button is clicked
//   const scrollToSection = (to) => {
//     scroller.scrollTo(to, {
//       duration: 800,
//       delay: 0,
//       smooth: 'easeInOutQuart',
//     });
//   };

// // Scrollspy to update active section on scroll
// useEffect(() => {
//   const scrollSpyHandler = () => {
//     const scrollY = window.scrollY;
//     const aboutSection = document.getElementById('about');

//     if (aboutSection) {
//       const aboutSectionTop = aboutSection.offsetTop;
//       const aboutSectionBottom = aboutSectionTop + aboutSection.offsetHeight;

//       if (scrollY >= aboutSectionTop && scrollY < aboutSectionBottom) {
//         setActiveSection('about');
//       } else {
//         setActiveSection(null);
//       }
//     }
//   };

//   window.addEventListener('scroll', scrollSpyHandler);

//   // Cleanup the event listener on component unmount
//   return () => {
//     window.removeEventListener('scroll', scrollSpyHandler);
//   };
// }, []);


//   return (
//     <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
//       <div className="container mx-auto">
//         {/* nav inner */}
//         <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50 ">
//           <NavItem to="home" icon={<BiHomeAlt />} isActive={activeSection === 'home'} onClick={() => scrollToSection('home')}/>
//           <NavItem to="about" icon={<BiUser />} isActive={activeSection === 'about'} onClick={() => scrollToSection('about')} />
//           <NavItem to="services" icon={<BsClipboardData />} isActive={activeSection === 'services'} onClick={() => scrollToSection('services')} />
//           <NavItem to="skills" icon={<FaCogs />} isActive={activeSection === 'skills'} onClick={() => scrollToSection('skills')}/>
//           <NavItem to="work" icon={<BiBriefcase />} isActive={activeSection === 'work'} onClick={() => scrollToSection('work')}/>
//           <NavItem to="contact" icon={<BsChatSquareText />} isActive={activeSection === 'contact'} onClick={() => scrollToSection('contact')}/>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const NavItem = ({ to, icon, isActive, onClick }) => {
//   return (
//     <div
//       className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${isActive ? 'active' : ''}`}
//       onClick={onClick}
//     >
//       <span className={`icon ${isActive ? 'active-icon' : ''}`}>{icon}</span>
//     </div>
//   );
// };

// export default Nav;
