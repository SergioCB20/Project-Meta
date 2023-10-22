import React from 'react'

import '../App.css';

function Nav(){
    const sections = [
        'Home',
        'About',
        'Menu',
        'Reservations',
        'Order Online',
        'Login'
    ]
    return(
        <nav className='navBar'>
            <ul>
                {sections.map((section,idx)=>(
                    <li key={idx}><a href='#' role='btnNav'>{section}</a></li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav