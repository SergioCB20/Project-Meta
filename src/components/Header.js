import React from 'react';
import Nav from './Nav';

import Logo from '../assets/icons_assets/Logo .svg'
import '../App.css';

function Header(){
    return(
        <header>
            <a href='#' role='logo'><img src={Logo} alt='Logo Little Lemon'/></a>
            <Nav/>
        </header>
    );
}

export default Header