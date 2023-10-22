import React from 'react';
import Nav from './Nav';

function Header(){
    return(
        <header>
            <a href='#' role='logo'><img/></a>
            <Nav/>
        </header>
    );
}

export default Header