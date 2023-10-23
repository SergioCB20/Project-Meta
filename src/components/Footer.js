import React from 'react'

import Logo from "../assets/icons_assets/Logo.svg"
import '../App.css';

function Footer(){
    return(
        <>
            <div className='bg-footer'></div>
            <footer>
                <div className='footer-info'>
                    <img src={Logo}/>
                    <div className='doormat'>
                        <h2>Doormat Navigation</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservations</li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </div>
                    <div className='contact'>
                        <h2>Contact Info</h2>
                        <ul>
                            <li>Av. Gadamandapio 134</li>
                            <li>+51 20295819</li>
                            <li><a href='mailto: sergiochumbi98@gmail.com'>sergiochumbi98@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className='social'>
                        <h2>Social Media</h2>
                        <ul>
                            <li>Av. Gadamandapio 134</li>
                            <li>+51 20295819</li>
                            <li><a href='mailto: sergiochumbi98@gmail.com'>sergiochumbi98@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer