import React from 'react'

import HeroImg from "../assets/icons_assets/restauranfood.jpg"
import '../App.css';

function Hero(){
    return(
        <div className='hero'>
            <h1>Little Lemon</h1>
            <img src={HeroImg} alt='Restaurant Food - Hero Image'/>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterrean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a table</button>
        </div>
    )
}

function Specials(){
    return(
        <div className='specials'>
            <div className='specials-header'>
                <h1>Specials</h1>
            </div>
        </div>
    )
}

function Main(){
    return(
        <main>
            <Hero/>
            <div className='bg-hero'/>
            <Specials/>
        </main>
    )
}

export default Main