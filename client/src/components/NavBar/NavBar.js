import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/logo.png'
import './NavBar.css'

const NavBar = () => {
    return <div>
        <nav className='navbar'>
            <img className='logo' src={logo}/>
            <ul>
                <Link to='/'><li className='link'>Contacts</li></Link>
                <Link to='/history'><li className='link'>SMS History</li></Link>
            </ul>
        </nav>
    </div>
}

export default NavBar;