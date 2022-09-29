import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='Header'>
        <div className='title'><h1> <FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon> Physical Fitness Center</h1></div>
        <div className='btn'>
            <a href="/orders">Orders</a>
        </div>
       </nav>
    );
};

export default Header;