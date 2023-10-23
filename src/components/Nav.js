import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

function Nav(){
    const sections = [
        {
            to:'/',
            name:'Home'
        },

        {
            to:'/about',
            name:'About'
        },

        {
            to:'/menu',
            name:'Menu'
        },

        {
            to:'/reservations',
            name:'Reservations'
        },

        {
            to:'/order-online',
            name:'Online Order'
        },

        {
            to:'/login',
            name:'Login'
        }
    ]

    return(
        <>
            <nav className='navBar'>
                <ul>
                    {sections.map((section,idx)=>(
                    <li key={idx}><Link to={section.to}>{section.name}</Link></li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Nav