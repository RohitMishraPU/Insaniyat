import {React, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/free-regular-svg-icons';

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);

  return (
    // <div className='navbar'>Coming Soon</div>
    <nav className='navbar'>
        <img className='logo' src='/src/assets/insaaniyat.ico' alt='Logo' />
        <div className='content'>
        <h3 className='logoName1'>InsaaniyatReborn</h3>
        <h3 className='logoName2'>InsaaniyatReborn</h3>
        </div>
        
        <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}>
            <Link to='/' className='home'>
                <li>Home</li>
            </Link>
            <Link to='/events' className='events'>
                <li>Events</li>
            </Link>
            <Link to='/about' className='about'>
                <li>About</li>
            </Link>
            <Link to='/contact' className='contact'>
                <li>Contact</li>
            </Link>
            <Link to='/donate' className='donate'>
                <li>Donate</li>
            </Link>
        </ul>
        <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}>
            {isMobile 
            ? ( <i className='fa fa-times'></i> )
            : ( <i className='fa fa-bars'></i> 
            )}
        </button>
    </nav>
  )
}

export default Navbar;